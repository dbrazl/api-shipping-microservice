import express, { Express, NextFunction, Request } from "express";
import { injectable, inject } from "inversify";
import { IMiddlewaresConfigurator } from "infrastructure/interfaces/IMiddlewaresConfigurator";
import { IExpressErrorHandler } from "infrastructure/interfaces/IExpressErrorHandler";

@injectable()
export class ExpressMiddlewareConfigurator implements IMiddlewaresConfigurator {
  private readonly errorHandler: IExpressErrorHandler;

  constructor(@inject('IExpressErrorHandler') errorHandler: IExpressErrorHandler) {
    this.errorHandler = errorHandler;
  }

  public configure(app: Express): void {
    app.use(express.json());
    app.use(this.errorHandler.handle.bind(this.errorHandler));
  }
}
