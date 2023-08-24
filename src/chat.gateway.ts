import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';

@WebSocketGateway(80, {
  transports: ['polling', 'websocket'],
  cors: {
    origin: '*',
  },
})
export class ChatGateway {
  @WebSocketServer() server;

  @SubscribeMessage('events')
  handleMessage() {
    console.log('Here is the message');
    this.server.emit('message', 'Hello World');
  }
}
