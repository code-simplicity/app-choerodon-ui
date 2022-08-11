import React, { FC, useEffect } from 'react';
import { Tag } from 'choerodon-ui';
import { Button, Icon, TextField } from 'choerodon-ui/pro';
import expendIcon from '../../../../assets/images/expend.png';
import styles from './index.module.less';

// 租户侧栏的列表选项
const TenantsSide = props => {
    // 解构dataSet
    const { tenantsDataSet } = props;
    const { records, current, data } = tenantsDataSet;
    // console.log('records :>> ', records);
    // console.log('current :>> ', current);
    // console.log('data :>> ', data);
    useEffect(() => {
        console.log('tenantsDataSet :>> ', tenantsDataSet);
    }, []);

    return (
        <>
            <div className={styles['tenants-container-main-left']}>
                <div className={styles['tenants-container-main-left-search']}>
                    <div className={styles['search-input']}>
                        <TextField prefix={<Icon type='search' />} placeholder='请搜索关键字' />
                    </div>
                    <div className={styles['fun-item']}>
                        <Button icon='filter2' />
                    </div>
                    <div className={styles.shrinkage}>
                        <img className={styles['expend-img']} src={expendIcon} alt='侧栏icon' />
                    </div>
                </div>
                <div className={styles['tenants-list']}>
                    {records.map(record => {
                        return (
                            <div className={styles['tenants-list-item']}>
                                <div className={styles['tenants-list-item-top']}>
                                    <div>{record.get('tenantName')}</div>
                                    <Tag>启用</Tag>
                                </div>
                                <div className={styles['content-des']}>
                                    {record.get('tenantNum')}
                                </div>
                            </div>
                        );
                    })}
                    <div className={styles['tenants-list-item']}>
                        <div className={styles['tenants-list-item-top']}>
                            <div>HZERO平台</div>
                            <Tag>启用</Tag>
                        </div>
                        <div className={styles['content-des']}>HZERO</div>
                    </div>
                    <div className={styles['tenants-list-item']}>
                        <div className={styles['tenants-list-item-top']}>
                            <div>HZERO平台</div>
                            <Tag>启用</Tag>
                        </div>
                        <div className={styles['content-des']}>HZERO</div>
                    </div>
                    <div className={styles['tenants-list-item']}>
                        <div className={styles['tenants-list-item-top']}>
                            <div>HZERO平台</div>
                            <Tag>启用</Tag>
                        </div>
                        <div className={styles['content-des']}>HZERO</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TenantsSide;
