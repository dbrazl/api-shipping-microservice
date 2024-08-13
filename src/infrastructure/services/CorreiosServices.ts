const soap = require('soap');
import { promisify } from 'util';
import { AddressDto } from "application/dtos/AddressDto";
import { ICorreiosServices } from "application/interfaces/ICorreiosServices";
import { CorreiosAddressDto } from 'infrastructure/dtos/CorreiosAddressDto';
import { injectable } from 'inversify';

@injectable()
export class CorreiosServices implements ICorreiosServices {
  public async getAddress(zipCode: string): Promise<AddressDto> {
    const URL: string = 'https://apphom.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl';

    const createClientPromise = promisify(soap.createClient);
    const client: any = await createClientPromise(URL);
    const consultaCEPPromise = promisify(client.consultaCEP);
    const correiosAddressDto: CorreiosAddressDto = await consultaCEPPromise(zipCode);
    const addressDto: AddressDto = new AddressDto(
      correiosAddressDto.bairro,
      correiosAddressDto.cep,
      correiosAddressDto.cidade,
      correiosAddressDto.complemento,
      correiosAddressDto.complemento2,
      correiosAddressDto.end,
      correiosAddressDto.uf,
    );
    return addressDto;
  }
}
