import * as next from "next";
import Config from "./config";

const nextApp = next({ dev: Config.get("env").dev });


export { nextApp };

