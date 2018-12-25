import { ISystemClassify, IProduceClassify } from "../../../typings";
export const PRODUCT_CLASSIFY_PAGESIZE = "PRODUCT_CLASSIFY_PAGESIZE";
export const PRODUCT_CLASSIFY_OFFSET = "PRODUCT_CLASSIFY_OFFSET";
export const PRODUCT_MANAGE_PAGESIZE = "PRODUCT_MANAGE_PAGESIZE";
export const PRODUCT_MANAGE_OFFSET = "PRODUCT_MANAGE_OFFSET";

export const PRODUCT_CHECK_PAGESIZE = "PRODUCT_CHECK_PAGESIZE";
export const PRODUCT_CHECK_OFFSET = "PRODUCT_CHECK_OFFSET";
export const PRODUCT_COMMENT_CHECK_PAGESIZE = "PRODUCT_COMENT_CHECK_PAGESIZE";
export const PRODUCT_COMMENT_CHECK_OFFSET = "PRODUCT_COMMENT_CHECK_OFFSET";

export const PRODUCT_COMMENT_MANAGE_PAGESIZE = "PRODUCT_COMMENT_MANAGE_PAGESIZE";
export const PRODUCT_COMMENT_MANAGE_OFFSET = "PRODUCT_COMMENT_MANAGE_OFFSET";

export const PRODUCT_SYSTEM_CLASSIFY = "PRODUCT_SYSTEM_CLASSIFY";
export const PRODUCT_CLASSIFY = "PRODUCT_CLASSIFY";
export const PRODUCT_TAG = "PRODUCT_TAG";

export const setClassifyPagesize = (text: number) => {
    return {
        type: PRODUCT_CLASSIFY_PAGESIZE,
        text: text,
    };
};
export const setClassifyOffset = (text: number) => {
    return {
        type: PRODUCT_CLASSIFY_OFFSET,
        text: text,
    };
};
export const setManagePagesize = (text: number) => {
    return {
        type: PRODUCT_MANAGE_PAGESIZE,
        text: text,
    };
};
export const setManageOffset = (text: number) => {
    return {
        type: PRODUCT_MANAGE_OFFSET,
        text: text,
    };
};
export const setCheckPagesize = (text: number) => {
    return {
        type: PRODUCT_CHECK_PAGESIZE,
        text: text,
    };
};
export const setCheckOffset = (text: number) => {
    return {
        type: PRODUCT_CHECK_OFFSET,
        text: text,
    };
};
export const setCommentCheckPagesize = (text: number) => {
    return {
        type: PRODUCT_COMMENT_CHECK_PAGESIZE,
        text: text,
    };
};
export const setCommentCheckOffset = (text: number) => {
    return {
        type: PRODUCT_COMMENT_CHECK_OFFSET,
        text: text,
    };
};
export const setCommentManagePagesize = (text: number) => {
    return {
        type: PRODUCT_COMMENT_MANAGE_PAGESIZE,
        text: text,
    };
};
export const setCommentManageOffset = (text: number) => {
    return {
        type: PRODUCT_COMMENT_MANAGE_OFFSET,
        text: text,
    };
};
export const setSystemClassify = (text: ISystemClassify[]) => {
    return {
        type: PRODUCT_SYSTEM_CLASSIFY,
        text: text,
    };
};
export const setProduceClassify = (text: IProduceClassify[]) => {
    return {
        type: PRODUCT_CLASSIFY,
        text: text,
    };
};
export const setProductTag = (text: string[]) => {
    return {
        type: PRODUCT_TAG,
        text: text,
    };
};
