import { inject, injectable } from "inversify";
import { IApp } from "infrastructure/interfaces/IApp";
import { IServer } from "infrastructure/interfaces/IServer";

@injectable()
export class Server implements IServer {
  public readonly app: IApp;

  constructor(@inject('IApp') app: IApp) {
    this.app = app;
  }

  public listen(port: number): void {
    this.app.createApp().listen(port);
  }
}
