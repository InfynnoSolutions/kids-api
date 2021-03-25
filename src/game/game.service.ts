import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { Game } from './entities/game.entity';

@Injectable()
export class GameService {
  constructor(
    @InjectRepository(Game)
    protected readonly gameRepository: Repository<Game>,
  ) {}

  async create(createGameDto: CreateGameDto) {
    return await this.gameRepository.save(createGameDto);
  }

  async findAll() {
    return await this.gameRepository.find();
  }

  async findOne(id: number) {
    return await this.gameRepository.findOneOrFail({ id });
  }

  async update(id: number, updateGameDto: UpdateGameDto) {
    return await this.gameRepository.update(id, updateGameDto);
  }

  async remove(id: number) {
    return await this.gameRepository.delete({ id });
  }
}
