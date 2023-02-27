import { Todo } from './models/todo.model';
import { TodoDTO } from './dto/todo.addDTO';
import { TodoService } from './todo.service';
import { UpdateDTO } from './dto/todo.updateDTO';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}
  @Get()
  getTodos(): Todo[] {
    return this.todoService.getTodos();
  }
  @Post()
  addTodo(@Body() todo: TodoDTO): void {
    this.todoService.addTodo(todo);
  }
  @Get('/:id')
  getTodo(@Param('id') id: string): Todo {
    return this.todoService.getTodo(id);
  }
  @Delete('/delete/:id')
  deleteTodo(@Param('id') id: string): void {
    this.todoService.deleteTodo(id);
  }
  @Put('update/:id')
  updateTodo(@Param('id') id: string, @Body() updateDto: UpdateDTO): void {
    this.todoService.updateTodo(id, updateDto);
  }
}
