import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoDTO } from './todo.dto';


@Controller('todo')
export class TodoController {

    constructor(private TodoService: TodoService){}
    @Get()
    indexRoot() {
        return this.TodoService.showAll();
    }
    @Post()
    storeRecord(@Body()  data: TodoDTO){
        return this.TodoService.create(data);
    }

    @Get(':id')
    indexShow(@Param('id') id: string) {
       return this.TodoService.detailData(id);
    }
    @Put(':id')
    indexUpdate(@Param('id') id: string, @Body() data: Partial<TodoDTO>) {
       return this.TodoService.update(id, data);
    }

    @Delete(':id')
    deleteData(@Param('id') id: string) {
       return this.TodoService.remove(id);
    }
    // @Get('service')
    // detailService() {
    //     return this.TodoService.allData();
    // }

   


}
