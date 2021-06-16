import { IsNotEmpty, IsInt, IsBoolean } from 'class-validator';

export class TodoDto {
  @IsNotEmpty()
  @IsInt()
  id: number;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  @IsBoolean()
  done: boolean;
}
