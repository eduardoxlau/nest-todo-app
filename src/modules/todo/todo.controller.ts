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
import { TodoService } from './todo.service';

@Controller('todos')
export class TodoController {
  constructor(private readonly _todoService: TodoService) {}

  @Get()
  findAll() {
    return this._todoService.getAll();
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number) {
    return this._todoService.getId(id);
  }

  @Post()
  create(@Body() todo: TodoDto) {
    return this._todoService.create(todo);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() todo: TodoDto) {
    return this._todoService.update(id, todo);
  }

  @Delete(':id')
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this._todoService.delete(id);
  }
}
