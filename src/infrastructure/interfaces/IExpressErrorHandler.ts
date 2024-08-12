import { NextFunction, Request, Response } from "express";

export interface IExpressErrorHandler {
  handle(error: any, request: Request, response: Response, next: NextFunction): Response;
}
