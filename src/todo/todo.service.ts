import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

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
}
