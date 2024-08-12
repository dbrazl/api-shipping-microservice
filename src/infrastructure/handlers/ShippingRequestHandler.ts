import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import { HealthDto } from "adapters/dtos/HealthDto";
import { IShippingController } from "adapters/interfaces/IShippingController";
import { IShippingRequestHandler } from "infrastructure/interfaces/IShippingRequestHandler";

@injectable()
export class ShippingRequestHandler implements IShippingRequestHandler {
  private readonly shippingController: IShippingController;

  constructor(@inject('IShippingController') shippingController: IShippingController) {
    this.shippingController = shippingController;
  }

  public handleHealth(request: Request, response: Response): Response {
    const healthDto: HealthDto = this.shippingController.health();
    return response.status(healthDto.statusCode).json();
  }
}
