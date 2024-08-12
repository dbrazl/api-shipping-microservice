import { Router, Request, Response, NextFunction } from "express";
import { IRoutes } from "infrastructure/interfaces/IRoutes";
import { IExpressShippingRequestHandler } from "infrastructure/interfaces/IExpressShippingRequestHandler";
import { inject, injectable } from "inversify";
import { IExpressRequestParamZipCodeValidator } from "infrastructure/interfaces/IExpressRequestParamZipCodeValidator";

@injectable()
export class ExpressRoutes implements IRoutes {
  public readonly router: Router;
  private readonly shippingRequestHandler: IExpressShippingRequestHandler;
  private readonly requestParamZipCodeValidator: IExpressRequestParamZipCodeValidator;

  constructor(
    @inject('IExpressShippingRequestHandler') shippingRequestHandler: IExpressShippingRequestHandler,
    @inject('IExpressRequestParamZipCodeValidator') requestParamZipCodeValidator: IExpressRequestParamZipCodeValidator,
  ) {
    this.shippingRequestHandler = shippingRequestHandler;
    this.requestParamZipCodeValidator = requestParamZipCodeValidator;
    this.router = Router();
    this.createRoutes();
  }

  private createRoutes(): void {
    this.router.get('/health', (request: Request, response: Response) => this.shippingRequestHandler.handleHealth(request, response));
    this.router.get(
      '/address/:zipCode',
      (request: Request, response: Response, next: NextFunction) => this.requestParamZipCodeValidator.validate(request, response, next),
      (request: Request, response: Response) => response.status(200).json({ zipCode: request.params.zipCode }))
  }
}
