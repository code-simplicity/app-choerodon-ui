import React from 'react';
import { Layout } from 'choerodon-ui';
import HeaderLogo from './components/HeaderLogo';
import HeaderMenu from './components/HeaderMenu';
import CSearch from '../../Components/CSearch';
import styles from './index.module.less';

const { Header } = Layout;

// 头部布局组件
const LayoutHeader = () => {
    return (
        <Header className={styles['layout-header-container']} style={{ backgroundColor: '#fff' }}>
            <div className={styles['layout-header-logo']}>
                <HeaderLogo />
            </div>
            <div className={styles['layout-header-search']}>
                <CSearch />
            </div>
            <div>
                <HeaderMenu />
            </div>
        </Header>
    );
};

export default LayoutHeader;
