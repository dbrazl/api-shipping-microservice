import { Container } from "inversify";

export interface IDependencyInjection {
  configure(): Container;
}
