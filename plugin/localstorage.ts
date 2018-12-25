/**
 * Created by peiyuanwu on 16/12/7.
 */
export const localstorage: {
    version: number;
    init: () => void;
    clear: (callback?: () => {}) => void;
    setItem: (key: string, val: string) => void;
    getItem: (key: string) => string | undefined | null;
    removeItem: (key: string) => void;
}
    = {
        version: 20161207,
        init: () => {
            console.log("LS init");// tslint:disable-line:no-console
            console.log("LS version:", localstorage.version);// tslint:disable-line:no-console
            if (typeof window !== "undefined") {
                if (typeof window !== "undefined") {
                    if (window.localStorage.version !== localstorage.version) {
                        localstorage.clear();
                        window.location.reload();
                    }
                }
            }
        },
        clear: (callback?: () => {}) => {
            console.log("LS clear");// tslint:disable-line:no-console
            if (typeof window !== "undefined") {
                window.localStorage.clear();
                window.localStorage.version = localstorage.version;
                if (typeof callback === "function") {
                    callback();
                    if (typeof window !== "undefined") {
                        window.location.reload();
                    }
                }
            }
        },
        setItem: (key: string, val: string) => {
            if (typeof window !== "undefined") {
                return window.localStorage.setItem(key, val);
            }
        },
        getItem: (key: string) => {
            let value;
            if (typeof window !== "undefined") {
                value = window.localStorage.getItem(key);
            }
            return value;
        },
        removeItem: (key: string) => {
            if (typeof window !== "undefined") {
                window.localStorage.removeItem(key);
            }
        },
    };
