import { ErrorType } from "infrastructure/types/ErrorType";

export class ErrorDto {
  public readonly message: string;
  public readonly errors: ErrorType[] | undefined;

  constructor(message: string, errors: ErrorType[] | undefined = undefined) {
    this.message = message;
    this.errors = errors;
  }
}
