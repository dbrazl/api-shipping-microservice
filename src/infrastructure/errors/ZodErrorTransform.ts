import { inject, injectable } from "inversify";
import { ZodError } from "zod";
import { ErrorDto } from "infrastructure/dtos/ErrorDto";
import { IErrorMessages } from "infrastructure/interfaces/IErrorMessages";
import { IZodErrorTransform } from "infrastructure/interfaces/IZodErrorTransform";
import { ErrorType } from "infrastructure/types/ErrorType";

@injectable()
export class ZodErrorTransform implements IZodErrorTransform {
  private readonly errorMessages: IErrorMessages;

  constructor(@inject('IErrorMessages') errorMessages: IErrorMessages) {
    this.errorMessages = errorMessages;
  }

  public transform(error: ZodError): ErrorDto {
    return new ErrorDto(
      this.errorMessages.VALIDATION_ERROR,
      error.issues.map<ErrorType>((issue) => ({ message: issue.message, field: issue.path[0]?.toString() }))
    )
  }
}
