import React from 'react';
import { Layout } from 'choerodon-ui';
import LayoutHeader from './LayoutHeader';
import LayoutSider from './LayoutSider';

const { Content } = Layout;

// 布局样式
const LayoutApp = props => {
    const { children } = props;
    return (
        <Layout style={{ height: '100vh' }}>
            {/* 头部组件 */}
            <LayoutHeader />
            <Layout>
                {/* 侧边栏 */}
                <LayoutSider />
                <Layout style={{ padding: '10px 24px 24px' }}>
                    {/* 内容区域 */}
                    <Content>{children}</Content>
                </Layout>
            </Layout>
        </Layout>
    );
};
export default LayoutApp;
