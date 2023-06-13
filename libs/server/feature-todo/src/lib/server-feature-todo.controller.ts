import { ITodo } from '@libs/shared/domain';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateTodoDto } from './dtos/todo.dto';
import { ServerFeatureTodoService } from './server-feature-todo.service';

@Controller('server-feature-todo')
export class ServerFeatureTodoController {
  constructor(private serverFeatureTodoService: ServerFeatureTodoService) { }

  @Get('')
  getAll(): ITodo[] {
    return this.serverFeatureTodoService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): ITodo {
    return this.serverFeatureTodoService.getOne(id);
  }

  @Post('')
  create(@Body() data: CreateTodoDto): ITodo {
    return this.serverFeatureTodoService.create(data);
  }
}
