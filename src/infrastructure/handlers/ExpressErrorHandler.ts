import { Request, Response, NextFunction } from "express";
import { inject, injectable } from "inversify";
import { ZodError } from "zod";
import { IExpressErrorHandler } from "infrastructure/interfaces/IExpressErrorHandler";
import { IHttpStatus } from "adapters/interfaces/IHttpStatus";
import { IErrorMessages } from "infrastructure/interfaces/IErrorMessages";
import { IZodErrorTransform } from "infrastructure/interfaces/IZodErrorTransform";
import { ErrorDto } from "infrastructure/dtos/ErrorDto";

@injectable()
export class ExpressErrorHandler implements IExpressErrorHandler {
  private readonly httpStatus: IHttpStatus;
  private readonly errorMessages: IErrorMessages;
  private readonly zodErrorTransform: IZodErrorTransform;

  constructor(
    @inject('IHttpStatus') httpStatus: IHttpStatus,
    @inject('IErrorMessages') errorMessages: IErrorMessages,
    @inject('IZodErrorTransform') zodErrorTransform: IZodErrorTransform,
  ) {
    this.httpStatus = httpStatus;
    this.errorMessages = errorMessages;
    this.zodErrorTransform = zodErrorTransform;
  }

  public handle(error: any, request: Request, response: Response, next: NextFunction): Response {
    if (error instanceof ZodError) {
      return this.handleZodError(error, response);
    }

    return this.handleUnknowError(response);
  }

  private handleZodError(error: any, response: Response): Response {
    const errorDto: ErrorDto = this.zodErrorTransform.transform(error);
    return response.status(this.httpStatus.BAD_REQUEST).json(errorDto);
  }

  private handleUnknowError(response: Response): Response {
    const errorDto: ErrorDto = new ErrorDto(this.errorMessages.INTERNAL_SERVER_ERROR)
    return response.status(this.httpStatus.INTERNAL_SERVER_ERROR).json(errorDto);
  }
}
