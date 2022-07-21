import chalk from "chalk";

import LogTypes from "../types/LogTypes";

const AppLogTypes: LogTypes = {
  Middleware: "magenta",
  Controller: "green",
  Repository: "blue",
  Server: "yellow",
  Service: "cyan",
  Error: "red",
  Util: "cyan",
};

export default function AppLog(
  type:
    | "Middleware"
    | "Controller"
    | "Util"
    | "Service"
    | "Repository"
    | "Server"
    | "Error",
  text: any
) {
  console.log(
    chalk.bold[
      AppLogTypes[type] as
        | "green"
        | "magenta"
        | "blue"
        | "yellow"
        | "cyan"
        | "red"
    ](`[${type}] ${text}`)
  );
}
