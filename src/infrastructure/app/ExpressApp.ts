import express, { Express } from 'express';
import { inject, injectable } from 'inversify';
import { IApp } from 'infrastructure/interfaces/IApp';
import { IRoutesConfigurator } from 'infrastructure/interfaces/IRoutesConfigurator';
import { IMiddlewaresConfigurator } from 'infrastructure/interfaces/IMiddlewaresConfigurator';

@injectable()
export class ExpressApp implements IApp {
  private readonly routesConfigurator: IRoutesConfigurator;
  private readonly middlewaresConfigurator: IMiddlewaresConfigurator;

  constructor(
    @inject('IRoutesConfigurator') routesConfigurator: IRoutesConfigurator,
    @inject('IMiddlewaresConfigurator') middlewaresConfigurator: IMiddlewaresConfigurator,
  ) {
    this.routesConfigurator = routesConfigurator;
    this.middlewaresConfigurator = middlewaresConfigurator;
  }

  public createApp(): Express {
    const app = express();
    this.routesConfigurator.configure(app);
    this.middlewaresConfigurator.configure(app);
    return app;
  }
}
