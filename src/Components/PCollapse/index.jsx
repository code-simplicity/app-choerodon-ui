import React, { FC, ReactNode } from 'react';
import { Collapse } from 'choerodon-ui';
import styles from './index.module.less';

const { Panel } = Collapse;

// 自定义折叠面板组件
const PCollapse = props => {
    const { collapseParams, children } = props;
    return (
        <div className={styles['collapse-container']}>
            <Collapse bordered={false} defaultActiveKey={[`${collapseParams.key}`]}>
                <Panel header={collapseParams.header} key={collapseParams.key}>
                    {children}
                </Panel>
            </Collapse>
        </div>
    );
};

export default PCollapse;
