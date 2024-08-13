import { AddressDto } from "application/dtos/AddressDto";

export interface ICorreiosServices {
  getAddress(zipCode: string): Promise<AddressDto>;
}
