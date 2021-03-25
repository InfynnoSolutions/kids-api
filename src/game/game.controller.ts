import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GameService } from './game.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Game as GameModal } from '.prisma/client';

@ApiTags('Game')
@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @ApiOperation({ summary: 'Create Game' })
  @Post()
  async create(
    @Body() gameData: { level: number; type: string; content: number },
  ): Promise<GameModal> {
    const { level, type, content } = gameData;
    return this.gameService.create({
      level: Number(level),
      type,
      content: {
        connect: { id: Number(content) },
      },
    });
  }

  @Get()
  findAll() {
    return this.gameService.findAll({ include: { content: true } });
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.gameService.findOne({
      where: { id: +id },
      include: { content: true },
    });
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() gameData: { level: number; type: string; content: number },
  ): Promise<GameModal> {
    const { level, type, content } = gameData;
    return this.gameService.update({
      where: { id: +id },
      data: {
        level: Number(level),
        type,
        content: {
          connect: { id: Number(content) },
        },
      },
    });
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.gameService.remove({ id: +id });
  }
}
