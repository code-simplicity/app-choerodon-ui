import React from 'react';
import { Layout } from 'choerodon-ui';

const { Sider } = Layout;

// 左侧布局组件
const LayoutSider = () => {
    return (
        <Sider width={200} style={{ background: '#585AED' }}>
            LayoutSider
        </Sider>
    );
};

export default LayoutSider;
