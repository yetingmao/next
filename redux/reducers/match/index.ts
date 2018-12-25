import { SET_LIBRARY_CATALOG_TREE, SET_LIBRARY_LIST, SET_LIBRARY_SELECT_INDEX, SET_LIBRARY_CATALOG_LIST,
    SET_LIBRARY_CATALOG_LIST_COUNT } from "../../actions/match";

const initialState = {
    libraryList: [],
    treeList: [],
    catalogList: [],
    selectIndex: 0,
    count: 0,
};

export const matchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LIBRARY_LIST:
            return { ...state, libraryList: action.text };
        case SET_LIBRARY_CATALOG_TREE:
            return { ...state, treeList: action.text };
        case SET_LIBRARY_SELECT_INDEX:
            return { ...state, selectIndex: action.text };
        case SET_LIBRARY_CATALOG_LIST:
            return { ...state, catalogList: action.text };
        case SET_LIBRARY_CATALOG_LIST_COUNT:
            return { ...state, count: action.text };
        default:
            return state;
    }
};

