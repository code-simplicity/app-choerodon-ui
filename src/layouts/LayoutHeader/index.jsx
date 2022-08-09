import React from 'react';
import { Layout } from 'choerodon-ui';
import HeaderLogo from './components/HeaderLogo';
import HeaderMenu from './components/HeaderMenu';
import HeaderUser from './components/HeaderUser';
import CSearch from '../../components/CSearch';
import styles from './index.module.less';

const { Header } = Layout;

// 头部布局组件
const LayoutHeader = () => {
    return (
        <Header className={styles['layout-header-container']}>
            <div className={styles['layout-header-logo']}>
                <HeaderLogo />
            </div>
            <div className={styles['layout-header-search']}>
                <CSearch />
            </div>
            <div className='flex-1'>
                <HeaderMenu />
            </div>
            <div>
                <HeaderUser />
            </div>
        </Header>
    );
};

export default LayoutHeader;
