import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TodoDTO } from './todo.dto';
import {TodoList} from './todo.entity';

@Injectable()
export class TodoService {

    constructor(
        @InjectRepository(TodoList)
        private todolistRepository : Repository<TodoList>
    ) {  }

    async showAll(){
        return await this.todolistRepository.find();
    }
    async allData(){
        return 'Detail data serives'
    }
    async create(data: TodoDTO){
        const todolistNew = await this.todolistRepository.create(data);
        await this.todolistRepository.save(todolistNew)
        return todolistNew
    }

    async detailData(id: string){
        return await this.todolistRepository.findOne({ where: {id}})
    }
}
