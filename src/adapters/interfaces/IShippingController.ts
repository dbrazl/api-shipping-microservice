import { HealthDto } from "adapters/dtos/HealthDto";
import { GetAddressDto } from "adapters/dtos/GetAddressDto";

export interface IShippingController {
  health(): HealthDto;
  getAddress(zipCode: string): Promise<GetAddressDto>;
}
