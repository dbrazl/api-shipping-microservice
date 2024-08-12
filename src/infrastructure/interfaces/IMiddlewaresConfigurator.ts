import { AppType } from 'infrastructure/types/AppType';

export interface IMiddlewaresConfigurator {
  configure(app: AppType): void;
}
