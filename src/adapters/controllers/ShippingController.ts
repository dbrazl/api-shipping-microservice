import { inject, injectable } from "inversify";
import { HealthDto } from "adapters/dtos/HealthDto";
import { IHttpStatus } from "adapters/interfaces/IHttpStatus";
import { IShippingController } from "adapters/interfaces/IShippingController";
import { GetAddressDto } from "adapters/dtos/GetAddressDto";
import { IGetAddressUseCase } from "application/interfaces/IGetAddressUseCase";
import { AddressDto } from "application/dtos/AddressDto";

@injectable()
export class ShippingController implements IShippingController {
  private readonly httpStatus: IHttpStatus;
  private readonly getAddressUseCase: IGetAddressUseCase;

  constructor(
    @inject('IHttpStatus') httpStatus: IHttpStatus,
    @inject('IGetAddressUseCase') getAddressUseCase: IGetAddressUseCase,
  ) {
    this.httpStatus = httpStatus;
    this.getAddressUseCase = getAddressUseCase;
  }

  public health(): HealthDto {
    return new HealthDto(this.httpStatus.OK);
  }

  public async getAddress(zipCode: string): Promise<GetAddressDto> {
    const addressDto: AddressDto = await this.getAddressUseCase.execute(zipCode);
    const getAddressDto: GetAddressDto = new GetAddressDto(
      this.httpStatus.OK,
      addressDto,
    );
    return getAddressDto;
  }
}
