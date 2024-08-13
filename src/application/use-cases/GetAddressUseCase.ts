import { inject, injectable } from "inversify";
import { AddressDto } from "application/dtos/AddressDto";
import { IGetAddressUseCase } from "application/interfaces/IGetAddressUseCase";
import { IViaCepService } from "application/interfaces/IViaCepService";

@injectable()
export class GetAddressUseCase implements IGetAddressUseCase {
  private readonly viaCepService: IViaCepService;

  constructor(@inject('IViaCepService') viaCepService: IViaCepService) {
    this.viaCepService = viaCepService;
  }

  public async execute(zipCode: string): Promise<AddressDto> {
    return await this.viaCepService.getAddress(zipCode);
  }
}
