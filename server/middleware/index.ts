import { Middleware, IExtendedContext } from "@nestsoft/koa-extended";

//用户权限判断中间件
export const checkCompanyUser: Middleware = async (ctx, next) => {
    if (ctx.session && ctx.session.company) {
        await next();
    } else {
        ctx.redirect("/");
    }
};
