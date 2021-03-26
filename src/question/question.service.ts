import { Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class QuestionService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.QuestionCreateInput) {
    return this.prisma.question.create({ data });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.QuestionWhereUniqueInput;
    where?: Prisma.QuestionWhereInput;
    orderBy?: Prisma.QuestionOrderByInput;
    include?: Prisma.QuestionInclude;
  }) {
    const { skip, take, cursor, where, orderBy, include } = params;
    return this.prisma.question.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      include,
    });
  }

  async findOne(params: {
    where: Prisma.QuestionWhereUniqueInput;
    include: Prisma.QuestionInclude;
  }) {
    const { where, include } = params;
    return this.prisma.question.findUnique({ where, include });
  }

  async update(params: {
    where: Prisma.QuestionWhereUniqueInput;
    data: Prisma.QuestionUpdateInput;
  }) {
    const { where, data } = params;
    return this.prisma.question.update({ where, data });
  }

  async remove(where: Prisma.QuestionWhereUniqueInput) {
    return this.prisma.question.delete({ where });
  }
}
