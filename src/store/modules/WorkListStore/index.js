import { action, computed, observable } from 'mobx';
import { getLocalStorage, createLocalStorage } from '@src/utils/cache';

// 定义一些常量用于命名存储数据和获取数据
const work_list_tabs_active_key = 'work_list_tabs_active_key';
// 工作树的store
export class WorkListStore {
    // 定义树形解构的类型
    @observable dataTreeList = {
        expandIconColumnIndex: 0, // 展开列
        mode: 'tree', // 表格模式和tree，list
        expandedRender: false, // 开启树形展开
        checkFieldAsColumn: true, // 检查字段的列
        selectionMode: 'rowbox', // 选择模式
        defaultRowExpanded: false, // 默认表格tree是否展开
    };

    // 定义切换tabs的状态切换，防止刷新 两个值，一个是ToDo，一个是AllWorks，通过获取存储持久化数据判断是否该现实什么
    @observable workListTabsActiveKey =
        getLocalStorage(work_list_tabs_active_key) !== null
            ? getLocalStorage(work_list_tabs_active_key)
            : 'ToDo';
    // 构造函数;
    // constructor() {}

    // 获取表格展示模式
    @computed get getDataTreeMode() {
        return this.dataTreeList.mode;
    }

    // 改变表格结构
    @action setDataTreeMode(args) {
        // 有两种方式，一种是tree，一种list
        this.dataTreeList.mode = args;
    }

    // 获取tabs激活的key
    @computed get getWorkListTabsActiveKey() {
        return this.workListTabsActiveKey;
    }

    // 改变tabs激活的key
    @action setWorkListTabsActiveKey(args) {
        // 有两种方式,两个值，一个是ToDo，一个是AllWorks
        createLocalStorage(work_list_tabs_active_key, args);
        this.workListTabsActiveKey = args;
    }

    // 获取表格是否首次加载自动展开
    @computed get getDataTreeListDefaultRowExpanded() {
        return this.dataTreeList.defaultRowExpanded;
    }

    // 触发表格是否再开和加载的函数
    @action setDataTreeListDefaultRowExpanded(val) {
        this.dataTreeList.defaultRowExpanded = val;
    }
}

// 导入名称，作为key使用
export const WORK_LIST_STORE = 'workListStore';
