import { AddressDto } from "application/dtos/AddressDto";

export class GetAddressDto {
  public readonly statusCode: number;
  public readonly addressDto: AddressDto;

  constructor(statusCode: number, addressDto: AddressDto) {
    this.statusCode = statusCode;
    this.addressDto = addressDto;
  }
}
