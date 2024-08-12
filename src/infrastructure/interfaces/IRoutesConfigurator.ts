import { AppType } from 'infrastructure/types/AppType';

export interface IRoutesConfigurator {
  configure(app: AppType): void;
}
