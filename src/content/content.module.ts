import { PrismaService } from './../prisma.service';
import { Module } from '@nestjs/common';
import { ContentService } from './content.service';
import { ContentController } from './content.controller';

@Module({
  imports: [],
  controllers: [ContentController],
  providers: [ContentService, PrismaService],
})
export class ContentModule {}
