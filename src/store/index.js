import { createContext } from 'react';
import { WorkListStore, WORK_LIST_STORE } from './modules/WorkListStore';

// 创建一个store函数
function createStore() {
    return {
        [WORK_LIST_STORE]: new WorkListStore(),
    };
}

// 返回一个Store
const store = createStore();

// 创建stores执行上下文
const StoreContext = createContext(store);

export { store, StoreContext };
