import { injectable } from "inversify";
import { IHttpStatus } from "adapters/interfaces/IHttpStatus";

@injectable()
export class HttpStatus implements IHttpStatus {
  public readonly OK = 200;
}
