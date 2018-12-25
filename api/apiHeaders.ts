export const headersInit = () => {
    let queryArr: string[] = [];
    let token: string[] = [];
    const headersArr = [
        ["Content-Type", "application/json"],
        ["accept", "application/json"],
    ];
    if (typeof location !== "undefined") {
        queryArr = (location.search).replace(/^[?]/, "").split("&");
        token = ["Authorization"];
    }
    for (const item of queryArr) {
        if (item.match(/^(token)/) && item.split("=")[1]) {
            token.push(`Bearer ${item.split("=")[1]}`);
            break;
        }
    }
    if (token.length > 1) {
        headersArr.push(token);
    }
    return headersArr;
};
