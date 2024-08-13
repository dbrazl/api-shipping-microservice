import { injectable } from "inversify";
import { AddressDto } from "application/dtos/AddressDto";
import { IViaCepService } from "application/interfaces/IViaCepService";
import { ViaCepAddressDto } from "infrastructure/dtos/ViaCepAddressDto";

@injectable()
export class ViaCepService implements IViaCepService {
  public async getAddress(zipCode: string): Promise<AddressDto> {
    const URL: string = `https://viacep.com.br/ws/${zipCode}/json/`;
    const response: Response = await fetch(URL);
    const viaCepAddressDto: ViaCepAddressDto = await response.json();
    const addressDto: AddressDto = new AddressDto(
      viaCepAddressDto.bairro,
      viaCepAddressDto.cep,
      viaCepAddressDto.localidade,
      viaCepAddressDto.complemento,
      viaCepAddressDto.logradouro,
      viaCepAddressDto.uf,
    );
    return addressDto;
  }
}
