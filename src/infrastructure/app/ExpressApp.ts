import express, { Express } from 'express';
import { inject, injectable } from 'inversify';
import { IApp } from 'infrastructure/interfaces/IApp';
import { IMiddlewaresConfigurator } from 'infrastructure/interfaces/IMiddlewaresConfigurator';
import { IRoutesConfigurator } from 'infrastructure/interfaces/IRoutesConfigurator';

@injectable()
export class ExpressApp implements IApp {
  private readonly middlewaresConfigurator: IMiddlewaresConfigurator;
  private readonly routesConfigurator: IRoutesConfigurator;

  constructor(
    @inject('IMiddlewaresConfigurator') middlewaresConfigurator: IMiddlewaresConfigurator,
    @inject('IRoutesConfigurator') routesConfigurator: IRoutesConfigurator,
  ) {
    this.middlewaresConfigurator = middlewaresConfigurator;
    this.routesConfigurator = routesConfigurator;
  }

  public createApp(): Express {
    const app = express();
    this.middlewaresConfigurator.configure(app);
    this.routesConfigurator.configure(app);
    return app;
  }
}
