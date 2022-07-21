import { Request, Response, NextFunction } from "express";
import { unauthorizedError } from "../utils/errorUtils";
import AppLog from "../utils/AppLog";

function authValidation(endpoint?: string) {
  return (req: Request, res: Response, next: NextFunction) => {
    const header = req.header("authorization");
    const tokenInput = header?.replace("Bearer", "").trim();

    if (!header) {
      throw unauthorizedError(
        "You need to send the needed headers for authorization"
      );
    }

    // you can implement here the auth validation you want to make, like token validation
    AppLog("Middleware", `Header for endpoint ${endpoint} processed`);
    return next();
  };
}

export default authValidation;
