import { IProduceClassify, ITree, ICatalogTree } from "../typings";

const dataCount = (data: IProduceClassify[], parentIds: any, parentId?: number, upper?: IProduceClassify) => {
    for (let i = data.length - 1; i >= 0; i--) {
        const item = data[i];
        if (item.parentId === parentId || (parentId === undefined && item.parentId === null)) {
            if (parentIds.includes(item.id)) {
                dataCount(data, parentIds, item.id, item);
            }
            let count = 0;
            if (item.count !== undefined) {
                count = item.count;
            }
            if (upper) {
                upper.count = upper.count !== undefined ? upper.count + count : count;
            }
        }
    }
};
export const accumulate = (data: IProduceClassify[]) => {
    const list = [...data];
    const parentIdArr = list.map(item => item.parentId);
    const setparentId = new Set(parentIdArr);
    const parentIds = Array.from(setparentId);
    dataCount(list, parentIds);
    return list;
};
export const group = (id: number, data: IProduceClassify[], ids: number[]) => {
    ids.push(id);
    for (const iterator of data) {
        if (iterator.parentId === id) {
            group(iterator.id, data, ids);
        }
    }
};
export const groupP = (item: ITree, data: ITree[], names?: string[], ids?: string[]) => {
    //item：当前节点,data:全部树的数组，names：默认名称空数组，ids：默认id空数组(父级id)
    names.push(item.name);
    const pid = item.parentId;
    if (pid !== "null") {//获取所有父节点
        for (const iterator of data) {
            if (iterator.id === pid) {
                iterator.disabled = true;//父节点disabled
                if (iterator.parentId !== "null" && iterator.parentId !== undefined) {
                    groupP(iterator, data, names, ids);
                } else {
                    names.push(iterator.name);
                    if (ids) {
                        ids.push(iterator.id);
                    }
                }
            }
        }
    }
};
//树结构根据id查询当前节点
let node;
export const getNode = (id: string | number, data: any) => {
    if (data.length !== 0) {
        data.map((item) => {
            if (item.id !== id) {
                if (item.items && item.items.length !== 0) {
                    getNode(id, item.items);
                }
                if (item.Catalogs && item.Catalogs.length !== 0) {
                    getNode(id, item.Catalogs);
                }
            } else {
                node = item;
            }
        });
    }
    return node;
};
