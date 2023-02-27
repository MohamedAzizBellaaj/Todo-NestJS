import { ValidationArguments } from 'class-validator';

export function isDefinedMessage(validationData: ValidationArguments): string {
  return `${validationData.property} must be defined. It cannot be null.`;
}

export function minLengthMessage(validationData: ValidationArguments): string {
  return `${validationData.property} must be at least ${validationData.constraints} characters long`;
}

export function lengthMessage(validationData: ValidationArguments): string {
  return `${validationData.property}'s length must be greater or equal to ${validationData.constraints[0]} and less or equal to ${validationData.constraints[1]}`;
}
