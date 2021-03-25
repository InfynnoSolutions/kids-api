import { PrismaService } from './../prisma.service';
import { Module } from '@nestjs/common';
import { GameService } from './game.service';
import { GameController } from './game.controller';

@Module({
  imports: [],
  controllers: [GameController],
  providers: [GameService, PrismaService],
})
export class GameModule {}
