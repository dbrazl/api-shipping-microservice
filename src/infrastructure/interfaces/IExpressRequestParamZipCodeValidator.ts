import { NextFunction, Request, Response } from "express";

export interface IExpressRequestParamZipCodeValidator {
  validate(request: Request, response: Response, next: NextFunction): void;
}
