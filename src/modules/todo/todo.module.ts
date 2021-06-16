import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TodoService } from './todo.service';
import { TodoRepository } from './todo.repository';
import { TodoController } from './todo.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TodoRepository])],
  providers: [TodoService],
  controllers: [TodoController],
})
export class UserModule {}
