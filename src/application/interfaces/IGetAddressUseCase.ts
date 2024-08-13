import { AddressDto } from "application/dtos/AddressDto";

export interface IGetAddressUseCase {
  execute(zipCode: string): Promise<AddressDto>;
}
