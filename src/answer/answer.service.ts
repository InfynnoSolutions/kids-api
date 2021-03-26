import { PrismaService } from './../prisma.service';
import { Injectable } from '@nestjs/common';
import { Prisma } from '.prisma/client';

@Injectable()
export class AnswerService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.AnswerCreateInput) {
    return this.prisma.answer.create({ data });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.AnswerWhereUniqueInput;
    where?: Prisma.AnswerWhereInput;
    orderBy?: Prisma.AnswerOrderByInput;
    include?: Prisma.AnswerInclude;
  }) {
    const { skip, take, cursor, where, orderBy, include } = params;
    return this.prisma.answer.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      include,
    });
  }

  async findOne(params: {
    where: Prisma.AnswerWhereUniqueInput;
    include: Prisma.AnswerInclude;
  }) {
    const { where, include } = params;
    return this.prisma.answer.findUnique({ where, include });
  }

  async update(params: {
    where: Prisma.AnswerWhereUniqueInput;
    data: Prisma.AnswerUpdateInput;
  }) {
    const { where, data } = params;
    return this.prisma.answer.update({ where, data });
  }

  async remove(where: Prisma.AnswerWhereUniqueInput) {
    return this.prisma.answer.delete({ where });
  }
}
