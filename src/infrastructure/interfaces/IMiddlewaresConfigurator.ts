import { Express } from 'express';

export interface IMiddlewaresConfigurator {
  configure(app: Express): void;
}
