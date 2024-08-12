import { Request, NextFunction, Response } from "express";
import { injectable } from "inversify";
import { z } from 'zod'
import { IExpressRequestParamZipCodeValidator } from "infrastructure/interfaces/IExpressRequestParamZipCodeValidator";

@injectable()
export class ExpressRequestParamZipCodeValidator implements IExpressRequestParamZipCodeValidator {
  public validate(request: Request, response: Response, next: NextFunction): void {
    const { zipCode } = request.params;
    const schema = z.string().regex(/^\d+$/).length(8);
    schema.parse(zipCode)
    return next();
  }
}
