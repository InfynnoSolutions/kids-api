import { Question as QuestionModal } from '.prisma/client';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { QuestionService } from './question.service';

@ApiTags('Questions')
@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @ApiOperation({ summary: 'Create question' })
  @Post()
  async create(
    @Body()
    questionData: {
      content: number;
      image: string;
      game: number;
      audio: string;
    },
  ): Promise<QuestionModal> {
    const { content, image, game, audio } = questionData;
    return this.questionService.create({
      content: {
        connect: {
          id: Number(content),
        },
      },
      image,
      audio,
      game: {
        connect: {
          id: Number(game),
        },
      },
    });
  }

  @ApiOperation({ summary: 'All question' })
  @Get()
  async findAll() {
    return this.questionService.findAll({
      include: { content: true, game: true },
    });
  }

  @ApiOperation({ summary: 'Get question' })
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.questionService.findOne({
      where: { id: +id },
      include: { content: true, game: true },
    });
  }

  @ApiOperation({ summary: 'Update question' })
  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body()
    questionData: {
      content: number;
      image: string;
      game: number;
      audio: string;
    },
  ) {
    const { content, image, game, audio } = questionData;

    return this.questionService.update({
      where: { id: +id },
      data: {
        content: {
          connect: {
            id: Number(content),
          },
        },
        image,
        audio,
        game: {
          connect: {
            id: Number(game),
          },
        },
      },
    });
  }

  @ApiOperation({ summary: 'Delete question' })
  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.questionService.remove({ id: +id });
  }
}
