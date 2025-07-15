import { Injectable } from '@nestjs/common';
import { Socket } from 'socket.io';

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  isActive?: boolean;
}

interface ConnectedUser {
  [socketId: string]: {
    socket: Socket;
    user: User;
  };
}

const users: User[] = [
  { id: '1', name: 'John Doe', email: 'john@example.com', password: 'password123', isActive: true },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', password: 'password456', isActive: false },
  { id: '3', name: 'Alice Johnson', email: 'alice@example.com', password: 'password789', isActive: true },
];

@Injectable()
export class UserService {
  private connectedUsers: ConnectedUser = {};

  registrarUser(socket: Socket, userId: string): void {
    const user = users.find(u => u.id === userId);

    if (!user) {
      throw new Error('User not found');
    }

    if (!user.isActive) {
      throw new Error('User is not active');
    }

    // Verifica si ya está conectado y desconecta el socket anterior
    this.disconnectIfAlreadyConnected(user.id);

    this.connectedUsers[socket.id] = {
      socket,
      user,
    };
  }

  removeUser(socketId: string): void {
    delete this.connectedUsers[socketId];
  }

  getConnectedUsers(): string[] {
    return Object.keys(this.connectedUsers);
  }

  getUserFullName(socketId: string): string {
    const connected = this.connectedUsers[socketId];
    if (!connected) throw new Error('User not connected');
    return connected.user.name;
  }

  private disconnectIfAlreadyConnected(userId: string): void {
    for (const socketId in this.connectedUsers) {
      const connected = this.connectedUsers[socketId];
      if (connected.user.id === userId) {
        connected.socket.disconnect(); // Desconecta al usuario anterior
        delete this.connectedUsers[socketId]; // Elimina su referencia
        break;
      }
    }
  }
}
