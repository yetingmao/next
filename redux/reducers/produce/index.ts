import * as types from "../../actions/produce";
const initialState = {
    systemClassify: [],
    produceClassify: [],
    productTag: ["中国风"],
    offset: 1,
    pageSize: 10,
};

export const productReducer = (state = initialState, action: { type: string, text: any }) => {
    switch (action.type) {
        case types.PRODUCT_CLASSIFY_PAGESIZE:
            return { ...state, pageSize: action.text, offset: 1 };
        case types.PRODUCT_CLASSIFY_OFFSET:
            return { ...state, offset: action.text };
        case types.PRODUCT_MANAGE_PAGESIZE:
            return { ...state, pageSize: action.text, offset: 1 };
        case types.PRODUCT_MANAGE_OFFSET:
            return { ...state, offset: action.text };
        case types.PRODUCT_CHECK_PAGESIZE:
            return { ...state, pageSize: action.text, offset: 1 };
        case types.PRODUCT_CHECK_OFFSET:
            return { ...state, offset: action.text };
        case types.PRODUCT_COMMENT_CHECK_PAGESIZE:
            return { ...state, pageSize: action.text, offset: 1 };
        case types.PRODUCT_COMMENT_CHECK_OFFSET:
            return { ...state, offset: action.text };
        case types.PRODUCT_COMMENT_MANAGE_PAGESIZE:
            return { ...state, pageSize: action.text, offset: 1 };
        case types.PRODUCT_COMMENT_MANAGE_OFFSET:
            return { ...state, offset: action.text };
        case types.PRODUCT_SYSTEM_CLASSIFY:
            return { ...state, systemClassify: action.text };
        case types.PRODUCT_CLASSIFY:
            return { ...state, produceClassify: action.text };
        case types.PRODUCT_TAG:
            return { ...state, productTag: action.text };
        default:
            return state;
    }
};

