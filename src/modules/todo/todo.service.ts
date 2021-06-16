import {
  HttpStatus,
  Injectable,
  HttpException,
  BadRequestException,
} from '@nestjs/common';

import { TodoDto } from './dto/todo';

@Injectable()
export class TodoService {
  todos: TodoDto[] = [
    {
      id: 1,
      description: 'Learn Javascript',
      done: false,
    },
    {
      id: 2,
      description: 'Learn NestJS',
      done: true,
    },
    {
      id: 2,
      description: 'Build something with NestJS',
      done: false,
    },
  ];

  getId(id: number) {
    if (!id) {
      throw new BadRequestException('id must be sent');
    }
    const todo = this.todos.find(({ id: idUser }) => idUser === id);
    if (!todo) throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);

    return todo;
  }

  getAll() {
    return this.todos;
  }

  create(todo: TodoDto) {
    this.todos.push(todo);
    return todo;
  }

  update(id: number, todo: TodoDto) {
    if (!id) {
      throw new BadRequestException('id must be sent');
    }
    const index = this.getIndexOf(id);
    this.todos[index] = todo;
    return this.todos;
  }

  delete(id: number) {
    if (!id) {
      throw new BadRequestException('id must be sent');
    }
    const index = this.getIndexOf(id);
    delete this.todos[index];
    return this.todos;
  }

  private getIndexOf(id: number) {
    return this.todos.findIndex(({ id: idUser }) => idUser === id);
  }
}
