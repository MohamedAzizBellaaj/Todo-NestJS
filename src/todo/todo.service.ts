import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Todo, TodoStatusEnum } from './models/todo.model';
import { TodoDTO } from './dto/todo.addDTO';
import { UpdateDTO } from './dto/todo.updateDTO';

@Injectable()
export class TodoService {
  private todos: Todo[] = [];
  @Inject('UUID') uuid: () => string;
  getTodos(): Todo[] {
    return this.todos;
  }
  addTodo(todo: TodoDTO): void {
    const { name, description } = todo;
    const newTodo: Todo = {
      id: this.uuid(),
      name: name,
      description: description,
      creation_date: new Date(),
      status: TodoStatusEnum.waiting,
    };
    this.todos.push(newTodo);
  }
  getTodo(id: string): Todo {
    if (this.todos.find((todo) => todo.id === id)) {
      return this.todos.find((todo) => todo.id === id);
    } else {
      throw new NotFoundException();
    }
  }
  deleteTodo(id: string): void {
    if (this.todos.find((todo) => todo.id === id)) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    } else {
      throw new NotFoundException();
    }
  }
  updateTodo(id: string, updateDto: UpdateDTO): void {
    const todo: Todo = this.todos.find((todo) => todo.id === id);
    if (todo) {
      const { name, description, status } = updateDto;
      todo.name = name;
      todo.description = description;
      todo.status = status;
    } else {
      throw new NotFoundException();
    }
  }
}
