import React from 'react';
import { Spin } from 'choerodon-ui/pro';

// 加载组件
const CSpinLoading = () => {
    return (
        <Spin
            tip='正在加载中...'
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        ></Spin>
    );
};
export default CSpinLoading;
