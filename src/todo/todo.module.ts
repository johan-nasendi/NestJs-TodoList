import { Module } from '@nestjs/common';
import { TodoList } from './todo.entity.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
@Module({
    imports: [TypeOrmModule.forFeature([TodoList])],
    controllers: [TodoController],
    providers: [TodoService]
})
export class TodoModule {}
