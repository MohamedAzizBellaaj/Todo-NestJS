import { TodoStatusEnum } from './todo.model';

export class UpdateDTO {
  name: string;
  description: string;
  status: TodoStatusEnum;
}
