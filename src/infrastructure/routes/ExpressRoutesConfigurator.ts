import { Express } from "express";
import { injectable, inject } from "inversify";
import { IRoutes } from "infrastructure/interfaces/IRoutes";
import { IRoutesConfigurator } from "infrastructure/interfaces/IRoutesConfigurator";

@injectable()
export class ExpressRoutesConfigurator implements IRoutesConfigurator {
  private readonly routes: IRoutes;

  constructor(@inject('IRoutes') routes: IRoutes) {
    this.routes = routes;
  }

  public configure(app: Express): void {
    app.use(this.routes.router);
  }
}
