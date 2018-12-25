import * as  http from "http";
import * as Koa from "koa";
import Chalk from "chalk";
import Config from "./config";
import RedisStore from "@nestsoft/redis-session";
import { nextApp } from "./app";
import Routers from "./router";
import { parse } from "url";

(async () => {
    await nextApp.prepare();
    const app = new Koa();
    app.use(RedisStore({
        redis: Config.get("redis"),
        key: Config.get("session.key"),
        maxAge: Config.get("session.maxAge"),
        domain: Config.get("session.domain"),
    }));
    app.use(async (ctx: Koa.Context & { session: { token?: string } }, next) => {
        const loginOrigin = Config.get("loginOrigin");
        const productOrigin = Config.get("productOrigin");
        const matchOrigin = Config.get("matchOrigin");
        ctx.request.query = { ...ctx.request.query, loginOrigin, productOrigin, matchOrigin, token: ctx.session.token };
        ctx.res.statusCode = 200;
        await next();
    });
    app.use(Routers);
    const handle = nextApp.getRequestHandler();
    app.use(async (ctx, next) => {
        const { req, res } = ctx;
        if (req !== undefined && req.url !== undefined) {
            const parsedUrl = parse(req.url, true);
            await handle(req, res, parsedUrl);
            await next();
        }
    });
    const port = Config.get("env").port;
    console.log(Chalk.green("[goujianku-web]", Chalk.cyan("Listening on port:"), Chalk.yellow(port)));// tslint:disable-line:no-console
    http.createServer(app.callback()).listen(port);
})();
