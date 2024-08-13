import { inject, injectable } from "inversify";
import { AddressDto } from "application/dtos/AddressDto";
import { IGetAddressUseCase } from "application/interfaces/IGetAddressUseCase";
import { ICorreiosServices } from "application/interfaces/ICorreiosServices";

@injectable()
export class GetAddressUseCase implements IGetAddressUseCase {
  private readonly correiosService: ICorreiosServices;

  constructor(@inject('ICorreiosServices') correiosService: ICorreiosServices) {
    this.correiosService = correiosService;
  }

  public async execute(zipCode: string): Promise<AddressDto> {
    return await this.correiosService.getAddress(zipCode);
  }
}
