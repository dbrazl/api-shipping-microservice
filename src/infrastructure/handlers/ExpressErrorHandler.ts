import { Request, Response, NextFunction } from "express";
import { inject, injectable } from "inversify";
import { ZodError } from "zod";
import { IExpressErrorHandler } from "infrastructure/interfaces/IExpressErrorHandler";
import { IHttpStatus } from "adapters/interfaces/IHttpStatus";
import { IErrorMessages } from "infrastructure/interfaces/IErrorMessages";

@injectable()
export class ExpressErrorHandler implements IExpressErrorHandler {
  private readonly httpStatus: IHttpStatus;
  private readonly errorMessages: IErrorMessages;

  constructor(
    @inject('IHttpStatus') httpStatus: IHttpStatus,
    @inject('IErrorMessages') errorMessages: IErrorMessages,
  ) {
    this.httpStatus = httpStatus;
    this.errorMessages = errorMessages;
  }

  public handle(error: any, request: Request, response: Response, next: NextFunction): Response | void {
    if (error instanceof ZodError) {
      return this.handleZodError(error, response);
    }

    return this.handleUnknowError(response);
  }

  private handleZodError(error: any, response: Response): Response | void {
    return response.status(this.httpStatus.BAD_REQUEST).json(error);
  }

  private handleUnknowError(response: Response): Response {
    return response.status(this.httpStatus.INTERNAL_SERVER_ERROR).json({ message: this.errorMessages.INTERNAL_SERVER_ERROR });
  }
}
