import {
  Get,
  Body,
  Post,
  Param,
  Patch,
  Delete,
  Controller,
  ParseIntPipe,
} from '@nestjs/common';
import { TodoDto } from './dto/todo';
import { Todo } from './todo.entity';
import { TodoService } from './todo.service';

@Controller('todos')
export class TodoController {
  constructor(private readonly _todoService: TodoService) {}

  @Get()
  findAll(): Promise<Todo[]> {
    return this._todoService.getAll();
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number): Promise<Todo> {
    return this._todoService.getId(id);
  }

  @Post()
  create(@Body() todo: TodoDto): Promise<Todo> {
    return this._todoService.create(todo);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() todo: TodoDto,
  ): Promise<void> {
    return this._todoService.update(id, todo);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this._todoService.delete(id);
  }
}
