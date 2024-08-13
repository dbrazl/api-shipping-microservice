export class CorreiosAddressDto {
  public readonly bairro: string;
  public readonly cep: string;
  public readonly cidade: string;
  public readonly complemento: string;
  public readonly complemento2: string;
  public readonly end: string;
  public readonly id: string;
  public readonly uf: string;

  constructor(
    bairro: string,
    cep: string,
    cidade: string,
    complemento: string,
    complemento2: string,
    end: string,
    id: string,
    uf: string,
  ) {
    this.bairro = bairro;
    this.cep = cep;
    this.cidade = cidade;
    this.complemento = complemento;
    this.complemento2 = complemento2;
    this.end = end;
    this.id = id;
    this.uf = uf;
  }
}
