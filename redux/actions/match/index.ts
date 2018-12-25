import { IIibrary, ICatalogTree, ICatalogItem } from "../../../typings";

export const SET_LIBRARY_LIST = "SET_LIBRARY_LIST";
export const setLibraryList = (text: IIibrary[]) => {
    return {
        type: SET_LIBRARY_LIST,
        text: text,
    };
};

export const SET_LIBRARY_CATALOG_TREE = "SET_LIBRARY_CATALOG_TREE";
export const setLibraryCatalogTree = (text: ICatalogTree[]) => {
    return {
        type: SET_LIBRARY_CATALOG_TREE,
        text: text,
    };
};

export const SET_LIBRARY_SELECT_INDEX = "SET_LIBRARY_SELECT_INDEX";
export const setLibrarySelectIndex = (text: number) => {
    return {
        type: SET_LIBRARY_SELECT_INDEX,
        text: text,
    };
};

export const SET_LIBRARY_CATALOG_LIST = "SET_LIBRARY_CATALOG_LIST";
export const setLibraryCatalogList = (text: ICatalogItem[]) => {
    return {
        type: SET_LIBRARY_CATALOG_LIST,
        text: text,
    };
};

export const SET_LIBRARY_CATALOG_LIST_COUNT = "SET_LIBRARY_CATALOG_LIST_COUNT";
export const setLibraryCatalogListCount = (text: number) => {
    return {
        type: SET_LIBRARY_CATALOG_LIST_COUNT,
        text: text,
    };
};
