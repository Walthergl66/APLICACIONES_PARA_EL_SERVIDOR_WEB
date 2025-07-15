import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { ZonacultivoService } from './zonacultivo.service';
import { CreateZonaCultivoDto } from './dto/create-zonacultivo.dto';
import { UpdateZonaCultivoDto } from './dto/update-zonacultivo.dto';

@WebSocketGateway({ cors: true })
export class ZonacultivoGateway implements OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer()
  wss: Server;

  constructor(private readonly zonacultivoService: ZonacultivoService) {}

  // Cliente se conecta
  handleConnection(client: Socket) {
    console.log(`Cliente conectado: ${client.id}`);
  }

  // Cliente se desconecta
  handleDisconnect(client: Socket) {
    console.log(`Cliente desconectado: ${client.id}`);
  }

  @SubscribeMessage('createZonacultivo')
  async create(@MessageBody() createZonaCultivoDto: CreateZonaCultivoDto) {
    const zona = await this.zonacultivoService.create(createZonaCultivoDto);
    this.wss.emit('zonacultivoCreated', zona); // Notifica a todos
    return zona;
  }

  @SubscribeMessage('findAllZonacultivo')
  async findAll() {
    const zonas = await this.zonacultivoService.findAll();
    return zonas;
  }

  @SubscribeMessage('findOneZonacultivo')
  async findOne(@MessageBody() id: number) {
    return await this.zonacultivoService.findOne(id);
  }

  @SubscribeMessage('updateZonacultivo')
  async update(@MessageBody() data: { id: number; update: UpdateZonaCultivoDto }) {
    const updated = await this.zonacultivoService.update(data.id, data.update);
    this.wss.emit('zonacultivoUpdated', updated); // Notifica a todos
    return updated;
  }

  @SubscribeMessage('removeZonacultivo')
  async remove(@MessageBody() id: number) {
    await this.zonacultivoService.remove(id);
    this.wss.emit('zonacultivoRemoved', id); // Notifica a todos
    return { removed: true, id };
  }
}
