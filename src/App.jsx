/*
 * @Author: bugdr
 * @Date: 2022-08-04 11:19:02
 * @LastEditors: bugdr
 * @LastEditTime: 2022-08-08 15:11:15
 * @FilePath: \app-choerodon-ui\src\App.jsx
 * @Description:
 */
import React, { lazy, Suspense } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import { ConfigProvider, useConfig } from 'choerodon-ui';
import { hot } from 'react-hot-loader';
import './styles/App.less';
import LayoutApp from './layouts';
import SpinLoading from '@components/CSpinLoading';

// 设置中文语言包
import { localeContext } from 'choerodon-ui/pro';
import zh_CN from 'choerodon-ui/pro/lib/locale-context/zh_CN';
import 'moment/locale/zh-cn';

localeContext.setLocale(zh_CN);

// 路由懒加载
const WorkBench = lazy(() => import('@src/pages/WorkBench'));
const Calendar = lazy(() => import('@src/pages/Calendar'));
const WorkList = lazy(() => import('@src/pages/WorkList'));
const Home = lazy(() => import('@src/pages/Home'));

// 一个App程序包裹
function App() {
    return (
        <ConfigProvider>
            <HashRouter>
                <Switch>
                    <LayoutApp>
                        <Suspense fallback={<SpinLoading />}>
                            <Route exact key='home' path='/' component={Home} />
                            <Route exact path='/workbench' component={WorkBench} />
                            <Route exact path='/calendar' component={Calendar} />
                            <Route exact key='worklist' path='/worklist' component={WorkList} />
                        </Suspense>
                    </LayoutApp>
                    <Redirect to='/' />
                </Switch>
            </HashRouter>
        </ConfigProvider>
    );
}

export default hot(module)(App);
