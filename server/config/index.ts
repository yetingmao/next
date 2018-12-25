import { get } from "lodash";
const Config = { //tslint:disable-line: variable-name
    get: (name: string, def?: any) => {
        return get(Config, name, def);
    },
    redis: {
        port: 6379,
        host: "127.0.0.1",
        family: 4,
        password: "123456",
        db: 0,
    },
    session: {
        key: "xfl:session",
        maxAge: 86400000,
        domain: ".xfl.live",
    },
    env: {
        dev: true,
        port: 3400,
    },
    // productOrigin: "http://172.16.21.42:3000",
    //matchOrigin: "http://172.16.21.42:3000",
};
export default Config;
