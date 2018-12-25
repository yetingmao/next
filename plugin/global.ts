export const setConfig = (key: string, value: string) => {
    global[key] = value;
};

export const getConfig = (key: string) => {
    return global[key];
};
