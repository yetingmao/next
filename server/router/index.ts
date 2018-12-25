

import * as Router from "koa-router";
import * as compose from "koa-compose";
import * as Boom from "boom";
import Login from "./login";

const notAllowedOption = {
    // throw: false,
    notImplemented: () => Boom.notImplemented(),
    methodNotAllowed: () => Boom.methodNotAllowed(),
};
const composeRouters = (...routes: (Router | Router[])[]) => {
    return compose(routes.reduce(
        (res: Router.IMiddleware[], router: Router | Router[]) => {
            let newRes: Router.IMiddleware[];
            if (Array.isArray(router)) {
                newRes = res.concat(...router.map((e: Router) => [e.routes(), e.allowedMethods(notAllowedOption)]));
            } else {
                newRes = res.concat([router.routes(), router.allowedMethods(notAllowedOption)]);
            }
            return newRes;
        },
        []));
};

export default composeRouters(Login);
export { Login };
