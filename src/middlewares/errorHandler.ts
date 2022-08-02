import { NextFunction, Request, Response } from "express";

import AppLog from "../utils/AppLog";
import { errorTypeToStatusCode, isAppError } from "../utils/errorUtils";
import "express-async-errors";

export default function errorHandler(
  err,
  req: Request,
  res: Response,
  next: NextFunction
) {
  AppLog("Error", err);

  if (isAppError(err)) {
    const statusCode = errorTypeToStatusCode(err.type);
    return res.status(statusCode).send(err.message);
  }

  res.sendStatus(500);
}
