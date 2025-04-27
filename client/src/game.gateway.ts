import {
    SubscribeMessage, WebSocketGateway, WebSocketServer,
  } from '@nestjs/websockets';
  import { Server } from 'socket.io';
  
  @WebSocketGateway({ cors: true })
  export class GameGateway {
    @WebSocketServer() server: Server;
  
    // client emits: playCard { gameId, playerId, cardId }
    @SubscribeMessage('playCard')
    handlePlayCard(_, payload: any) {
      // for now just broadcast the same payload
      this.server.to(payload.gameId).emit('cardPlayed', payload);
    }
  }
  