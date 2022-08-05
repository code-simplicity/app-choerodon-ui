import React, { lazy, Suspense } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import './styles/App.less';
import LayoutApp from './layouts';

const WorkBench = lazy(() => import('./pages/WorkBench'));
const Calendar = lazy(() => import('./pages/Calendar'));
const WorkList = lazy(() => import('./pages/WorkList'));
const Home = lazy(() => import('./pages/Home'));

function App() {
    return (
        <HashRouter>
            <Switch>
                <LayoutApp>
                    <Suspense fallback={<span>正在加载中....</span>}>
                        <Route exact key='home' path='/' component={Home} />
                        <Route exact path='/workbench' component={WorkBench} />
                        <Route exact path='/calendar' component={Calendar} />
                        <Route exact key='worklist' path='/worklist' component={WorkList} />
                    </Suspense>
                </LayoutApp>
                <Redirect to='/' />
            </Switch>
        </HashRouter>
    );
}

export default App;
