import { IApp } from "./IApp";

export interface IServer {
  readonly app: IApp;
  listen(port: number): void;
}
