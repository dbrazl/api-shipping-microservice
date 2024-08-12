import { inject, injectable } from "inversify";
import { HealthDto } from "adapters/dtos/HealthDto";
import { IHttpStatus } from "adapters/interfaces/IHttpStatus";
import { IShippingController } from "adapters/interfaces/IShippingController";

@injectable()
export class ShippingController implements IShippingController {
  private readonly httpStatus: IHttpStatus;

  constructor(@inject('IHttpStatus') httpStatus: IHttpStatus) {
    this.httpStatus = httpStatus
  }

  public health(): HealthDto {
    return new HealthDto(this.httpStatus.OK);
  }
}
