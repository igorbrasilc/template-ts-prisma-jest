import { Request, Response, NextFunction } from "express";
import { Schema } from "joi";
import { wrongSchemaError } from "../utils/errorUtils";
import AppLog from "../utils/AppLog";

function validateSchema(schema: Schema, endpoint: string) {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.validate(req.body, { abortEarly: false });

    if (result.error) {
      const { error } = result;
      throw wrongSchemaError(error.details);
    }

    AppLog("Middleware", `Schema for endpoint ${endpoint} validated`);
    res.locals.body = req.body;
    return next();
  };
}

export default validateSchema;
