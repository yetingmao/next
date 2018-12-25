import { Middleware } from "@nestsoft/koa-extended";
import { nextApp } from "../app";

export const login: Middleware = async (ctx, next) => {
    const url = "/login";
    await nextApp.render(ctx.req, ctx.res, url, ctx.request.query);
    ctx.respond = false;
};

export const redirect: Middleware = async (ctx, next) => {
    if (ctx.session && ctx.session.company) {
        ctx.redirect("/product/classify");
    } else {
        ctx.redirect("/login");
    }
};
