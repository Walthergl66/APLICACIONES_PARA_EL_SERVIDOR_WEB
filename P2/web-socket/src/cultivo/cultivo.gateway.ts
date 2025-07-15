import { WebSocketGateway, SubscribeMessage, MessageBody, OnGatewayConnection, OnGatewayDisconnect, WebSocketServer } from '@nestjs/websockets';
import { CultivoService } from './cultivo.service';
import { CreateCultivoDto } from './dto/create-cultivo.dto';
import { UpdateCultivoDto } from './dto/update-cultivo.dto';
import { Server } from 'http';

@WebSocketGateway({cors : true})
export class CultivoGateway implements OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer()
  wss: Server;

  constructor(private readonly cultivoService: CultivoService) {}
  // Para conectar y desconectar clientes
  handleConnection(client: any, ...args: any[]) {
    const Token = client.handshake.headers.authorization as string;
    //Validacion de token
    console.log(`Token recibido: ${Token}` );
  }

  handleDisconnect(client: any) {
    console.log(`Cliente desconectado: ${client.id}`);
  }

  @SubscribeMessage('createCultivo')
  create(@MessageBody() createCultivoDto: CreateCultivoDto) {
    const insertedCultivo = this.cultivoService.create(createCultivoDto);
    this.wss.emit('cultivoCreated', insertedCultivo);
    return insertedCultivo;
  }

  @SubscribeMessage('findAllCultivo')
  findAll() {

    return this.cultivoService.findAll();
  }

  @SubscribeMessage('findOneCultivo')
  findOne(@MessageBody() id: string) {
    return this.cultivoService.findOne(id);
  }

  @SubscribeMessage('updateCultivo')
  update(@MessageBody() updateCultivoDto: UpdateCultivoDto) {
    return this.cultivoService.update(updateCultivoDto.id, updateCultivoDto);
  }

  @SubscribeMessage('removeCultivo')
  remove(@MessageBody() id: string) {
    return this.cultivoService.remove(id);
  }
}
