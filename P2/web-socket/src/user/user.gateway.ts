import { OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { UserService } from './user.service';
import { Socket } from 'socket.io';
import { MensajeDto } from './dto/mensaje.dto';
import { Server } from 'http';


@WebSocketGateway({ cors: true })
export class UserGateway implements OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer()
  wss: Server;

  constructor(private readonly userService: UserService) {}
  async handleConnection(client: Socket) {
    const token = client.handshake.headers.authorization as string;
    try {
      await this.userService.registrarUser(client, token);
    } catch (error) {
      client.disconnect();
      console.error(`Error al registrar usuario: ${error.message}`);
      return;
    }
    this.wss.emit('usuarioConectado', this.userService.getConnectedUsers()); 
    
  }

   handleDisconnect(client: Socket) {
    console.log(`Cliente desconectado: ${client.id}`);
    this.userService.removeUser(client.id);
    this.wss.emit('usuarioDesconectado', this.userService.getConnectedUsers());
  }

  @SubscribeMessage('mensaje')
  onMessage(client: Socket, payload: MensajeDto) {
    this.wss.emit('mensaje', {
      user: this.userService.getUserFullName(client.id),
      fullName: this.userService.getUserFullName(client.id),
      message: payload.contenido ?? 'Mensaje vacío',
    });

    // el cliente que emite el evento no recibe la respuesta
    // client.broadcast.emit('mensaje', {
      // fullName: this.userService.getUserFullName(client.id),
      // message: payload.contenido ?? 'Mensaje vacío',
    // });

    // solo el cliente que emite el evento recibe la respuesta
    // client.emit('mensaje', {
      // fullName: this.userService.getUserFullName(client.id),
      // message: payload.contenido ?? 'Mensaje vacío',
    // });
  }    
}
