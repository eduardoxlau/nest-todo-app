import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';

import { TodoController } from '../src/modules/todo/todo.controller';
import { TodoService } from '../src/modules/todo/todo.service';

describe('Todos', () => {
  let app: INestApplication;
  const todoService = {
    getAll: () => [
      {
        id: 1,
        description: 'Learn Javascript',
        done: false,
      },
    ],
  };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [],
      controllers: [TodoController],
      providers: [TodoService],
    })
      .overrideProvider(TodoService)
      .useValue(todoService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/GET todos`, () => {
    return request(app.getHttpServer())
      .get('/todos')
      .expect(200)
      .expect(todoService.getAll());
  });

  afterAll(async () => {
    await app.close();
  });
});
