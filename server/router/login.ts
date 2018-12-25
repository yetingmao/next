
/**
 * 登录页面相关路由
 */
import * as Router from "koa-router";
import { Login } from "../controller";
const router = new Router();

router
    .get("redirect", "/", Login.redirect)
    .get("login", "/login", Login.login);

export default [router];
export { router };
