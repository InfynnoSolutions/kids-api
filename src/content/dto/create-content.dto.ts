import { IsNotEmpty } from 'class-validator';

export class CreateContentDto {
  @IsNotEmpty()
  en: string;
  @IsNotEmpty()
  fr: string;
}
