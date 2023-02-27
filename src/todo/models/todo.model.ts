export class Todo {
  id: string;
  name: string;
  description: string;
  creation_date: Date;
  status: TodoStatusEnum;
}

export enum TodoStatusEnum {
  'actif' = 'En cours',
  'waiting' = 'En attente',
  'done' = 'Finalisé',
}
