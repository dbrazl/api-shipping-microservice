export class HealthDto {
  public readonly statusCode: number;

  constructor(statusCode: number) {
    this.statusCode = statusCode;
  }
}
