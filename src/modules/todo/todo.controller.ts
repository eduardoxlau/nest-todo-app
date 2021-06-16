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
  async findAll(): Promise<Todo[]> {
    return await this._todoService.getAll();
  }

  @Get(':id')
  async findById(@Param('id', ParseIntPipe) id: number): Promise<Todo> {
    return await this._todoService.getId(id);
  }

  @Post()
  async create(@Body() todo: TodoDto): Promise<Todo> {
    return this._todoService.create(todo);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() todo: TodoDto,
  ): Promise<void> {
    await this._todoService.update(id, todo);
  }

  @Delete(':id')
  async deleteUser(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this._todoService.delete(id);
  }
}
