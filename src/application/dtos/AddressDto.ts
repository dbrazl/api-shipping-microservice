export class AddressDto {
  public readonly neighborhood: string;
  public readonly zipCode: string;
  public readonly city: string;
  public readonly complement: string;
  public readonly street: string;
  public readonly state: string;

  constructor(
    neighborhood: string,
    zipCode: string,
    city: string,
    complement: string,
    street: string,
    state: string,
  ) {
    this.neighborhood = neighborhood;
    this.zipCode = zipCode;
    this.city = city;
    this.complement = complement;
    this.street = street;
    this.state = state;
  }
}
