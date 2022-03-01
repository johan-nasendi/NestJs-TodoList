import { Controller, Get, Param } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {

    constructor(private TodoService: TodoService){}
    @Get()
    indexRoot() {
        return this.TodoService.showAll();
    }

    // @Get(':id')
    // indexShow(@Param('id') id: string): string {
    //     return 'Page Detail Data ' + id;
    // }

    @Get('service')
    detailService() {
        return this.TodoService.allData();
    }

}
