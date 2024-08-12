import { Express } from 'express';

export interface IApp {
  createApp(): Express;
}
