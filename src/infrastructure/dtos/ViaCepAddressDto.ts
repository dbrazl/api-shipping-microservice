export class ViaCepAddressDto {
  public readonly cep: string;
  public readonly logradouro: string;
  public readonly complemento: string;
  public readonly unidade: string;
  public readonly bairro: string;
  public readonly localidade: string;
  public readonly uf: string;
  public readonly ibge: string;
  public readonly gia: string;
  public readonly ddd: string;
  public readonly siafi: string;

  constructor(
    cep: string,
    logradouro: string,
    complemento: string,
    unidade: string,
    bairro: string,
    localidade: string,
    uf: string,
    ibge: string,
    gia: string,
    ddd: string,
    siafi: string,
  ) {
    this.cep = cep;
    this.logradouro = logradouro;
    this.complemento = complemento;
    this.unidade = unidade;
    this.bairro = bairro;
    this.localidade = localidade;
    this.uf = uf;
    this.ibge = ibge;
    this.gia = gia;
    this.ddd = ddd;
    this.siafi = siafi;
  }
}
