import { Button, DataSet } from 'choerodon-ui/pro';
import { ButtonColor } from 'choerodon-ui/pro/lib/button/interface';
import React, { FC, useMemo } from 'react';
import { FieldType } from 'choerodon-ui/dataset/data-set/enum';
import { API_URL } from '@src/utils/constant';
import styles from './index.module.less';
import TenantsSide from './components/TenantsSide';
import TenantsContent from './components/TenantsContent';

// 租户维护页面
const Tenants = () => {
    // 构建ds数据源
    const tenantsDataSet = useMemo(() => {
        return new DataSet({
            primaryKey: 'tenantId',
            autoQuery: true,
            dataKey: 'content',
            pageSize: 10,
            fields: [
                {
                    name: 'tenantId',
                    type: FieldType.string,
                },
                {
                    name: 'tenantName',
                    type: FieldType.string,
                    label: '租户名称',
                    required: true,
                    lovCode: 'LOV_CODE',
                },
                {
                    name: 'tenantNum',
                    type: FieldType.string,
                    label: '租户编码',
                },
                {
                    name: 'enableDataSecurity',
                    type: FieldType.string,
                    label: '启用数据安全',
                },
                {
                    name: 'tableSplitFlag',
                    type: FieldType.string,
                    label: '继承租户管理员模板',
                    labelWidth: '100px', // label宽度
                },
                {
                    name: 'objectVersionNumber',
                    type: FieldType.string,
                    label: '限制用户',
                },
            ],
            transport: {
                read: {
                    url: `${API_URL}/tenants`,
                    method: 'GET',
                },
            },
            events: {
                load: ({ dataSet }) => {
                    console.log('加载完成', dataSet);
                },
            },
        });
    }, []);
    return (
        <div className={styles['tenants-container']}>
            <div className={styles['tenants-container-header']}>
                <div className={styles['tenants-container-header-title']}>
                    <span>租户维护</span>
                </div>
                <div>
                    <Button icon='add' color={ButtonColor.blue}>
                        创建租户
                    </Button>
                </div>
            </div>
            <div className={styles['tenants-container-main']}>
                <TenantsSide tenantsDataSet={tenantsDataSet} />
                <div className={styles['tenants-container-main-right']}>
                    <TenantsContent />
                </div>
            </div>
        </div>
    );
};

export default Tenants;
