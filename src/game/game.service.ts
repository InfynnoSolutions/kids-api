import { PrismaService } from './../prisma.service';
import { Injectable } from '@nestjs/common';
import { Prisma } from '.prisma/client';

@Injectable()
export class GameService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.GameCreateInput) {
    return this.prisma.game.create({
      data,
    });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.GameWhereUniqueInput;
    where?: Prisma.GameWhereInput;
    orderBy?: Prisma.GameOrderByInput;
    include?: Prisma.GameInclude;
  }) {
    const { skip, take, cursor, where, orderBy, include } = params;
    return this.prisma.game.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      include,
    });
  }

  async findOne(params: {
    where: Prisma.GameWhereUniqueInput;
    include?: Prisma.GameInclude;
  }) {
    const { where, include } = params;
    return this.prisma.game.findFirst({ where, include });
  }

  async update(params: {
    where: Prisma.GameWhereUniqueInput;
    data: Prisma.GameUpdateInput;
  }) {
    const { data, where } = params;
    return this.prisma.game.update({ data, where });
  }

  async remove(where: Prisma.GameWhereUniqueInput) {
    return this.prisma.game.delete({ where });
  }
}
