import express, { Express } from "express";
import { injectable } from "inversify";
import { IMiddlewaresConfigurator } from "infrastructure/interfaces/IMiddlewaresConfigurator";

@injectable()
export class ExpressMiddlewareConfigurator implements IMiddlewaresConfigurator {
  public configure(app: Express): void {
    app.use(express.json());
  }
}
