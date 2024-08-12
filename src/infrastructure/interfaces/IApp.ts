import { AppType } from 'infrastructure/types/AppType';

export interface IApp {
  createApp(): AppType;
}
