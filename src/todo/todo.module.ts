import { Module } from '@nestjs/common';
import { TodoList } from './todo.entity.js';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
    imports: [TypeOrmModule.forFeature([TodoList])]
})
export class TodoModule {}
