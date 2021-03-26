import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { AnswerService } from './answer.service';

@ApiTags('Answers')
@Controller('answer')
export class AnswerController {
  constructor(private readonly answerService: AnswerService) {}

  @ApiOperation({ summary: 'Create answer' })
  @Post()
  async create(
    @Body() answerData: { content: number; question: number; correct: boolean },
  ) {
    const { content, question, correct } = answerData;
    return this.answerService.create({
      content: {
        connect: {
          id: content,
        },
      },
      question: {
        connect: {
          id: question,
        },
      },
      correct,
    });
  }

  @ApiOperation({ summary: 'All answers' })
  @Get()
  async findAll() {
    return this.answerService.findAll({
      include: { content: true, question: true },
    });
  }

  @ApiOperation({ summary: 'Get answer' })
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.answerService.findOne({
      where: { id: +id },
      include: { content: true, question: true },
    });
  }

  @ApiOperation({ summary: 'Update answer' })
  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() answerData: { content: number; question: number; correct: boolean },
  ) {
    const { content, question, correct } = answerData;
    return this.answerService.update({
      where: { id: +id },
      data: {
        content: {
          connect: {
            id: content,
          },
        },
        question: {
          connect: {
            id: question,
          },
        },
        correct,
      },
    });
  }

  @ApiOperation({ summary: 'Delete answer' })
  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.answerService.remove({ id: +id });
  }
}
