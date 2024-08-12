import { Request, Response } from "express"

export interface IShippingRequestHandler {
  handleHealth(request: Request, response: Response): Response;
}
