import { injectable } from "inversify";
import { IErrorMessages } from "infrastructure/interfaces/IErrorMessages";

@injectable()
export class ErrorMessages implements IErrorMessages {
  public readonly INTERNAL_SERVER_ERROR = 'An internal error occour. Try again later!';
}
