import { AddressDto } from "application/dtos/AddressDto";

export interface IViaCepService {
  getAddress(zipCode: string): Promise<AddressDto>;
}
