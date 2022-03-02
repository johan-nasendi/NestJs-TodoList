import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoDTO } from './todo.dto';


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

    @Post()
    storeRecord(@Body()  data: TodoDTO){
        return this.TodoService.create(data);
    }


    @Get('service')
    detailService() {
        return this.TodoService.allData();
    }

}
