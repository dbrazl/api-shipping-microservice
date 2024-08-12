import { Router, Request, Response } from "express";
import { IRoutes } from "infrastructure/interfaces/IRoutes";
import { IShippingRequestHandler } from "infrastructure/interfaces/IShippingRequestHandler";
import { inject, injectable } from "inversify";

@injectable()
export class ExpressRoutes implements IRoutes {
  public readonly router: Router;
  private readonly shippingRequestHandler: IShippingRequestHandler;

  constructor(@inject('IShippingRequestHandler') shippingRequestHandler: IShippingRequestHandler) {
    this.router = Router();
    this.shippingRequestHandler = shippingRequestHandler;
    this.createRoutes();
  }

  private createRoutes(): void {
    this.router.get('/health', (request: Request, response: Response) => this.shippingRequestHandler.handleHealth(request, response));
  }
}
