import { lazy } from 'react';

// 路由组件
const routeList = [
    {
        path: '/',
        exact: true,
        name: '工作台',
        component: lazy(() => import('../pages/WorkBench')),
    },
];

export default routeList;
