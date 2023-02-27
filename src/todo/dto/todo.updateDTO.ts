import { TodoStatusEnum } from '../models/todo.model';
import {
  IsDefined,
  IsIn,
  Length,
  MinLength,
  ValidationArguments,
} from 'class-validator';
import {
  isDefinedMessage,
  lengthMessage,
  minLengthMessage,
} from '../todo.error-messages';

export class UpdateDTO {
  @IsDefined({
    message: (validationData: ValidationArguments) =>
      isDefinedMessage(validationData),
  })
  @Length(3, 10, {
    message: (validationData: ValidationArguments) =>
      lengthMessage(validationData),
  })
  name: string;

  @IsDefined({
    message: (validationData: ValidationArguments) =>
      isDefinedMessage(validationData),
  })
  @MinLength(10, {
    message: (validationData: ValidationArguments) =>
      minLengthMessage(validationData),
  })
  description: string;

  @IsDefined({
    message: (validationData: ValidationArguments) =>
      isDefinedMessage(validationData),
  })
  @IsIn(Object.values(TodoStatusEnum))
  status: TodoStatusEnum;
}
