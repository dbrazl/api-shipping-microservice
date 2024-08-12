import { injectable } from "inversify";
import { IHttpStatus } from "adapters/interfaces/IHttpStatus";

@injectable()
export class HttpStatus implements IHttpStatus {
  public readonly OK = 200;
  public readonly BAD_REQUEST = 400;
  public readonly INTERNAL_SERVER_ERROR = 500;
}
