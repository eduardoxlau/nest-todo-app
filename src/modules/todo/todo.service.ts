import {
  HttpStatus,
  Injectable,
  HttpException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { TodoDto } from './dto/todo';
import { Todo } from './todo.entity';
import { TodoRepository } from './todo.repository';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(TodoRepository)
    private readonly _todoRepository: TodoRepository,
  ) {}

  async getId(id: number) {
    if (!id) {
      throw new BadRequestException('id must be sent');
    }
    const todo = await this._todoRepository.findOne(id);
    if (!todo) throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);

    return todo;
  }

  async getAll() {
    const todos: Todo[] = await this._todoRepository.find();
    return todos;
  }

  async create(todo: TodoDto): Promise<Todo> {
    return await this._todoRepository.save(todo);
  }

  async update(id: number, todo: TodoDto): Promise<void> {
    if (!id) {
      throw new BadRequestException('id must be sent');
    }
    await this._todoRepository.update(id, todo);
  }

  async delete(id: number): Promise<void> {
    if (!id) {
      throw new BadRequestException('id must be sent');
    }
    try {
      await this._todoRepository.delete(id);
    } catch (error) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
  }
}
