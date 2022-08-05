import React, { useMemo } from 'react';
import { DataSet, Table } from 'choerodon-ui/pro';
import { Button } from 'choerodon-ui';
import styles from './index.module.less';

// 首页组件，表格显示在该位置，暂时写死，大家代码就写在这里
const Home = () => {
    const userDs = useMemo(() => {
        return new DataSet({
            // 主键字段名，一般用作级联行表的查询字段
            primaryKey: 'id',
            // 对应后端接口，自动生成约定的 submitUrl, queryUrl...
            name: 'user',
            // 指定 DataSet 初始化后自动查询
            autoQuery: true,
            // 请求分页大小
            pageSize: 5,
            // 数据对象名，默认值 'rows'
            dataKey: 'content',
            // DataSet 中包含的字段，对应上述后端数据中每条记录中的字段
            fields: [
                {
                    name: 'id',
                    type: 'number',
                    label: 'ID',
                },
                {
                    name: 'name',
                    type: 'intl',
                    label: '姓名',
                },
                {
                    name: 'code',
                    type: 'string',
                    label: '编码',
                },

                {
                    name: 'sex',
                    type: 'string',
                    label: '性别',
                    lookupUrl:
                        'https://www.fastmock.site/mock/423302b318dd24f1712751d9bfc1cbbc/mock/EMPLOYEE_GENDER',
                    required: true,
                },
                {
                    name: 'age',
                    type: 'number',
                    label: '年龄',
                },
                {
                    name: 'email',
                    type: 'string',
                    label: '邮箱',
                },
                {
                    name: 'startDate',
                    type: 'Date',
                    label: '出生日期',
                },
                {
                    name: 'active',
                    label: '状态',
                    type: 'boolean',
                },
            ],
            // 接口自定义配置
            transport: {
                // 查询请求的 axios 配置或 url 字符串
                read: {
                    url:
                        'https://www.fastmock.site/mock/423302b318dd24f1712751d9bfc1cbbc/mock/guide/user',
                    method: 'GET',
                },
                destroy: {
                    url:
                        'https://www.fastmock.site/mock/e0e74f994719101b6a238dbfb5a7088c/record_delete/table/delete',
                    method: 'POST',
                },
            },
            // DS 事件回调
            events: {
                load: ({ dataSet }) => {
                    console.log('加载完成', dataSet);
                },
                submit: ({ dataSet, data }) => {
                    console.log(data);
                    return true;
                },
            },
        });
    }, []);

    const columns = useMemo(() => {
        return [
            {
                name: 'id',
                renderer: ({ text, value, record }) => `${text}-${record.get('code')}`,
            },
            // { name: "id" },
            { name: 'name', editor: 'true' },
            { name: 'code', editor: 'true' },
            { name: 'sex', editor: 'true' },
            { name: 'age', editor: 'true' },
            { name: 'email', editor: 'true' },
            { name: 'startDate', editor: 'true' },
            { name: 'active', editor: 'true' },
            {
                name: 'delete',
                header: '操作',
                renderer: () => (
                    <Button
                        color='primary'
                        onClick={() => {
                            userDs.delete(userDs.current, '确认删除当前记录吗？(包含已暂移的项目)');
                        }}
                    >
                        删除
                    </Button>
                ),
            },
        ];
    }, []);
    return (
        <div className={styles['home-container']}>
            <div style={{ width: 1200, padding: 100 }}>
                <h1>表单数据</h1>
                <Button
                    color='primary'
                    onClick={() => {
                        userDs.remove(userDs.filter((record, index, array) => record.isSelected));
                    }}
                >
                    暂移
                </Button>
                <Button
                    color='primary'
                    onClick={() => {
                        userDs.removeAll();
                    }}
                >
                    暂移所有
                </Button>
                <Button
                    type='button'
                    onClick={() => {
                        userDs.deleteAll();
                    }}
                >
                    删除所有
                </Button>
                <Table
                    key='basic'
                    rowNumber={({ text }) => `#${text}`}
                    dataSet={userDs}
                    columns={columns}
                ></Table>
            </div>
        </div>
    );
};

export default Home;
