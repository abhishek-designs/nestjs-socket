import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './user.service';
import { ChatGateway } from './chat.gateway';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, UserService, ChatGateway],
})
export class AppModule {}
