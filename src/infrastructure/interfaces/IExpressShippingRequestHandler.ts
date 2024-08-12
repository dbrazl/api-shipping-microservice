import { Request, Response } from 'express';

export interface IExpressShippingRequestHandler {
  handleHealth(request: Request, response: Response): Response;
}
