import { Response, Request } from "express";

import AppLog from "@utils/AppLog";
import app from "./app";
import "dotenv/config";
import { unauthorizedError } from "@utils/errorUtils";

const { PORT, HOST } = process.env;

const port = +PORT || 4000;
const host = HOST || "localhost";

app.get("/", async (req: Request, res: Response) => res.send("API online"));
app.listen(port, host, () =>
  AppLog("Server", `Server running on port ${port}`)
);
