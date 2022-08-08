// 自定义状态管理的钩子
import React, { useContext } from 'react';
import { StoreContext } from '../../store/index';

// 使用useContext的hooks进行触发
const useStores = () => useContext(StoreContext);

export default useStores;
