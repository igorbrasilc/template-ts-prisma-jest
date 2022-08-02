import express, { json } from "express";
import helmet from "helmet";
import cors from "cors";
import "express-async-errors";

import router from "./routers/index";
import errorHandler from "./middlewares/errorHandler";

const app = express();
app.use(json());
app.use(cors());
app.use(helmet());
app.use(router);
app.use(errorHandler);

export default app;
