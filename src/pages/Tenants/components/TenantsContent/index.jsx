import { Button, Col, DataSet, Form, IntlField, Row, Switch, TextField } from 'choerodon-ui/pro';
import React, { FC, useMemo, useState } from 'react';
import { FieldType } from 'choerodon-ui/dataset/data-set/enum';
import styles from './index.module.less';
import PCollapse from '../../../../components/PCollapse';

const { Item } = Form;

// form表单组件
const FormComponents = props => {
    const { dataSet } = props;
    // 解构出记录
    const { current } = dataSet;
    // console.log('current', current);
    return (
        <>
            <Form
                dataSet={dataSet}
                labelWidth={
                    current.get('labelWidth') === 'auto' ? 'auto' : current.get('labelWidth')
                }
            >
                <Row gutter={16}>
                    <Col span={8}>
                        <Item>
                            <IntlField name='tenantName' dataSet={dataSet} />
                        </Item>
                    </Col>
                    <Col span={8}>
                        <Item>
                            <TextField name='tenantNum' />
                        </Item>
                    </Col>
                    <Col span={8}>
                        <Item>
                            <TextField name='enableDataSecurity' />
                        </Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={8}>
                        <Item>
                            <TextField name='tableSplitFlag' />
                        </Item>
                    </Col>
                    <Col span={8}>
                        <Item>
                            <TextField name='objectVersionNumber' />
                        </Item>
                    </Col>
                </Row>
            </Form>
        </>
    );
};

// 租户内容组件
const TenantsContent = () => {
    // 启用开关控制
    const onHandleEnable = () => {};
    // 定义折叠面板的头和参数
    const [collapseParamsState, setCollapseParamsState] = useState({
        header: 'HZERO平台',
        key: 'HZERO',
    });
    const [dataSubTableCollapseState, setDataSubTableCollapseState] = useState({
        header: '数据分表配置',
        key: 'DATASUBTABLE',
    });
    // 定义数据源ds
    const tenantsDataSet = useMemo(() => {
        return new DataSet({
            autoCreate: true,
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
            transport: {},
            events: {
                load: ds => {
                    console.log('加载完成', ds);
                },
            },
        });
    }, []);
    return (
        <div>
            <div className={styles['right-collapse']}>
                <div className={styles.right}>
                    <div className={styles['enable-container']}>
                        <span className={styles['enable-label']}>启用</span>
                        <Switch defaultChecked onChange={onHandleEnable} />
                    </div>
                    <div>
                        <Button disabled>保存</Button>
                    </div>
                </div>
                <div className={styles['right-collapse-box']}>
                    <PCollapse collapseParams={collapseParamsState} dataSet={tenantsDataSet}>
                        <FormComponents dataSet={tenantsDataSet} />
                    </PCollapse>
                    <PCollapse collapseParams={dataSubTableCollapseState} dataSet={tenantsDataSet}>
                        <p>我是数据分表配置</p>
                    </PCollapse>
                </div>
            </div>
        </div>
    );
};

export default TenantsContent;
