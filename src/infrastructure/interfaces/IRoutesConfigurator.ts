import { Express } from 'express';

export interface IRoutesConfigurator {
  configure(app: Express): void;
}
