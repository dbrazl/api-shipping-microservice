import { HealthDto } from "adapters/dtos/HealthDto";

export interface IShippingController {
  health(): HealthDto;
}
