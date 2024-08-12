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
    this.router.get('/health', this.shippingRequestHandler.handleHealth.bind(this.shippingRequestHandler));
    this.router.get(
      '/address/:zipCode',
      this.requestParamZipCodeValidator.validate.bind(this.requestParamZipCodeValidator),
      (request: Request, response: Response) => response.status(200).json({ zipCode: request.params.zipCode }));
  }
}
