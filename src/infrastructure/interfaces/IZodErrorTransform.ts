import { ErrorDto } from "infrastructure/dtos/ErrorDto";
import { ZodError } from "zod";

export interface IZodErrorTransform {
  transform(error: ZodError): ErrorDto;
}
