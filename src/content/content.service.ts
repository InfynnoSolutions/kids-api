import { PrismaService } from './../prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateContentDto } from './dto/create-content.dto';
import { UpdateContentDto } from './dto/update-content.dto';

@Injectable()
export class ContentService {
  constructor(private prisma: PrismaService) {}

  async create(createContentDto: CreateContentDto) {
    return this.prisma.content.create({ data: createContentDto });
  }

  async findAll() {
    return this.prisma.content.findMany();
  }

  async findOne(id: number) {
    return this.prisma.content.findFirst({ where: { id } });
  }

  async update(id: number, updateContentDto: UpdateContentDto) {
    return this.prisma.content.update({
      where: { id },
      data: updateContentDto,
    });
  }

  async remove(id: number) {
    return this.prisma.content.delete({ where: { id } });
  }
}
