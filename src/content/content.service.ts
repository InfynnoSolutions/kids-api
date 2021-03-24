import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateContentDto } from './dto/create-content.dto';
import { UpdateContentDto } from './dto/update-content.dto';
import { Content } from './entities/content.entity';

@Injectable()
export class ContentService {
  constructor(
    @InjectRepository(Content)
    private readonly contentRepository: Repository<Content>,
  ) {}

  async create(createContentDto: CreateContentDto) {
    return await this.contentRepository.save(createContentDto);
  }

  async findAll() {
    return await this.contentRepository.find();
  }

  async findOne(id: number) {
    return await this.contentRepository.findOneOrFail({ id });
  }

  async update(id: number, updateContentDto: UpdateContentDto) {
    return await this.contentRepository.update(id, updateContentDto);
  }

  async remove(id: number) {
    return await this.contentRepository.delete({ id });
  }
}
