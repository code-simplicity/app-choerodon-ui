import { DataSet, Table, Button, Icon, useModal, TextField, Form, Tabs } from 'choerodon-ui/pro';
import { Avatar, Tag } from 'choerodon-ui';
import React, { useCallback, useMemo, useState } from 'react';

import styles from './index.module.less';
import { configure } from 'choerodon-ui';
import useStores from '@src/hooks/useStores';
import Modala from '../Modala';
import { observer } from 'mobx-react';
import Selects from '../Selects';
import FooterForms from '../FooterForms';

const { Column } = Table;
const { TabPane } = Tabs;

configure({
    pagination: { pageSizeOptions: ['10', '20', '50', '100', '1000'] },
});

// 添加子节点
const AddChildButton = observer(props => {
    const { dataSet, ...otherProps } = props;
    const { current } = dataSet;
    return <Button {...otherProps} disabled={!current || !current.get('id')} />;
});

// 工作事项树型表格
const CTreeTable = () => {
    // 使用模态框的钩子
    const Modal = useModal();

    // 自定义钩子
    const { workListStore } = useStores();
    const [state, setState] = useState({
        selectionMode: 'rowbox',
    });
    // 获取数据的mode
    const { getDataTreeMode, getDataTreeListDefaultRowExpanded } = workListStore;

    // 返回dataSet实例
    const dataSet = useMemo(() => {
        return new DataSet({
            primaryKey: 'id', // 主键标识
            // queryUrl:
            // "https://www.fastmock.site/mock/61a25320f9c2caad5cee5cd5d0ddf265/api/table/tree", // 查询地址
            // submitUrl:
            // 	"https://www.fastmock.site/mock/61a25320f9c2caad5cee5cd5d0ddf265/api/table/tree", // 提交地址
            autoQuery: true, // 启动分页查询
            parentField: 'parentId', // 父id
            idField: 'id', // 字段
            // checkField: "ischecked", // 检查字段树形数据标记节点是否为选中的字段名，在展开按钮后面会显示 checkbox
            dataKey: 'content', // 数据返回之后解析的字段
            pageSize: 10, // 分页
            paging: 'server', // 分页器打开
            fields: [
                { name: 'id', type: 'string' },
                { name: 'profile', type: 'string', label: '概要' },
                { name: 'number', type: 'string', label: '编号' },
                { name: 'priority', type: 'string', label: '优先级', required: true },
                { name: 'agent', type: 'string', label: '经办人' },
                { name: 'state', type: 'string', label: '状态', required: true },
                { name: 'sprint', type: 'string', label: '冲刺' },
                { name: 'reporter', type: 'string', label: '报告人' },
                { name: 'expand', type: 'boolean', label: '是否展开' },
                { name: 'updateTime', type: 'string', label: '最近更新时间' },
                { name: 'createTime', type: 'string', label: '创建时间' },
                { name: 'parentId', type: 'string' },
                { name: 'ischecked', type: 'boolean' },
                { name: 'createUser', type: 'string', label: '创建人' },
                { name: 'updateUser', type: 'string', label: '更新人' },
            ],
            transport: {
                read: {
                    url: 'https://www.fastmock.site/mock/61a25320f9c2caad5cee5cd5d0ddf265/api/table/tree',
                    method: 'post',
                },
            },
            events: {
                load: ({ dataSet }) => {
                    console.log('数据加载完成', dataSet.records);
                },
                indexchange: ({ current }) => console.log('current user', current),
                submit: ({ data }) => console.log('submit tree data', data),
            },
        });
    }, []);

    // 创建子节点
    const handleCreateChild = () => {
        dataSet.create({ parentId: dataSet.current.get('id') });
    };

    // 控制模式的改变
    const handleChangeSelectionMode = () => {
        setState(prevState => ({
            selectionMode: prevState.selectionMode === 'rowbox' ? 'treebox' : 'rowbox',
        }));
    };

    const buttons = [
        'add',
        'save',
        'query',
        'expandAll',
        'collapseAll',
        <AddChildButton key='add-child' dataSet={dataSet} onClick={handleCreateChild}>
            添加子节点
        </AddChildButton>,
        <Button key='change-selection-mode' onClick={handleChangeSelectionMode}>
            切换列表选择模式
        </Button>,
    ];

    // 自定义返回图标
    const profileIconRenderer = (record, text) => {
        //  如果parentId不为空或者未定义
        const { data } = record;
        // 三元表达式返回不同的状态和值
        return data.parentId !== undefined ? (
            <div className={styles['tree-table-profile']} onClick={() => summaryDetails(record)}>
                <Icon
                    type='agile_story'
                    style={{ marginRight: '6px', color: '#4D90FE', fontSize: '1.8em' }}
                />
                <span key='text'>{text}</span>
            </div>
        ) : (
            <div className={styles['tree-table-profile']} onClick={() => summaryDetails(record)}>
                <Icon
                    type='agile_subtask'
                    style={{ marginRight: '6px', color: '#00BFA5', fontSize: '1.8em' }}
                />
                <span key='text'>{text}</span>
            </div>
        );
    };

    // 概要详情的组件
    const ModalMainContent = props => {
        const { data } = props;
        console.log('props :>> ', props);
        return (
            <div className={styles['modal-main-content']}>
                {/* 1 */}
                <div className={styles['work-title']}>
                    <div className={styles['title-right']}>
                        {data.profile}
                        <Icon type='publish2' />
                    </div>
                    <div className={styles['title-left']}>⋮</div>
                </div>
                {/* 2 */}
                <div className={styles['form-item1']}>
                    <Form labelWidth='auto'>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginRight: '12px',
                                }}
                            >
                                <span>事故点：</span>
                                <TextField clearButton placeholder='无' style={{ width: '80px' }} />
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginRight: '12px',
                                }}
                            >
                                <span>原始预估时间：</span>
                                <TextField clearButton placeholder='无' style={{ width: '80px' }} />
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginRight: '12px',
                                }}
                            >
                                <span>剩余预估时间：</span>
                                <TextField clearButton placeholder='无' style={{ width: '80px' }} />
                            </div>
                        </div>
                    </Form>
                </div>
                {/* 3 */}
                <Tabs defaultActiveKey='1'>
                    <TabPane tab='Tab 1' key='1'>
                        详情
                    </TabPane>
                    <TabPane tab='Tab 2' key='2'>
                        评论(0)
                    </TabPane>
                    <TabPane tab='Tab 3' key='3'>
                        记录(0)
                    </TabPane>
                    <TabPane tab='Tab 4' key='4'>
                        开发
                    </TabPane>
                </Tabs>
                ,
            </div>
        );
    };

    //   自定义头部
    const customHeader = (title, closeBtn) => {
        return (
            <div className={styles['custom-header-header']}>
                <div className={styles['title']}>{title}</div>
                <Button funcType='flat'>
                    <Icon type='keyboard_arrow_right' style={{ fontSize: 16, color: '#08c' }} />
                    隐藏详情
                </Button>
            </div>
        );
    };

    // 点击概要显示概要详情
    const summaryDetails = useCallback(
        record => {
            console.log('1 :>> ', record.data);
            const modal = Modal.open({
                key: 'summary-detail-modal',
                title: record.data.number,
                drawer: true,
                cancelText: '关闭',
                okText: '导入',
                children: <ModalMainContent data={record.data} />,
                header: customHeader(record.data.number), // 自定义头部
                style: { width: '750px' },
            });
        },
        [Modal],
    );

    // 自定义概要渲染 自定义概要描述
    function profileRenderer({ record, text }) {
        return <div>{profileIconRenderer(record, text)}</div>;
    }

    // 自定义优先级列表展示
    const priorityRenderer = ({ value }) => {
        // 解构出值来
        return <Tag color={value.colour}>{value.name}</Tag>;
    };
    // 自定义状态展示
    const stateRenderer = ({ value }) => {
        return <Tag color={value.colour}>{value.name}</Tag>;
    };
    // 自定义冲刺展示
    const sprintRenderer = ({ value }) => {
        return <Tag color='geekblue'>{value}</Tag>;
    };
    // 渲染创建人列
    const createUserRenderer = ({ value }) => {
        return (
            <>
                <Avatar src={value.imageUrl} size='small' style={{ marginRight: '6px' }} />
                <span>{value.name}</span>
            </>
        );
    };
    // 渲染更新人列
    const updateUserRenderer = ({ value }) => {
        return (
            <>
                <Avatar src={value.imageUrl} size='small' style={{ marginRight: '6px' }} />
                <span>{value.name}</span>
            </>
        );
    };
    //控制footer的显示
    const [defaultDisplay, setDefaultDisplay] = useState(true);
    function handleDisplay() {
        setDefaultDisplay(!defaultDisplay);
    }

    //渲染Footer
    const footerRenderer = () => {
        return defaultDisplay ? (
            <div>
                <Button
                    className='defaultDisplayCreateButton'
                    funcType='flat'
                    icon='playlist_add'
                    color='primary'
                    onClick={() => {
                        handleDisplay();
                    }}
                    key='add'
                >
                    创建工作项
                </Button>
            </div>
        ) : (
            <FooterForms handleDisplay={handleDisplay}></FooterForms>
        );
    };

    return (
        <>
            <Table
                parityRow
                border={false}
                highLightRow='click'
                mode={getDataTreeMode}
                selectionMode={state.selectionMode}
                buttons={buttons}
                dataSet={dataSet}
                defaultRowExpanded={getDataTreeListDefaultRowExpanded}
                style={{ height: 320 }}
                rowHeight='40px'
                headerRowHeight='50px'
                treeAsync
                header={<Selects />}
                footer={footerRenderer}
            >
                <Column
                    name='profile'
                    width={340}
                    renderer={profileRenderer}
                    aggregationDefaultExpandAll={false}
                    lock
                />
                <Column name='number' width={120} tooltip='always' />
                <Column name='priority' width={80} renderer={priorityRenderer} />
                <Column name='agent' width={100} tooltip='always' />
                <Column name='state' width={120} renderer={stateRenderer} />
                <Column name='sprint' width={80} renderer={sprintRenderer} tooltip='always' />
                <Column name='reporter' width={100} tooltip='always' />
                <Column name='updateTime' width={160} tooltip='always' />
                <Column name='createTime' width={160} tooltip='always' />
                <Column name='createUser' width={120} renderer={createUserRenderer} />
                <Column name='updateUser' width={120} renderer={updateUserRenderer} />
            </Table>
            <Modala dataSet={dataSet}></Modala>
        </>
    );
};
export default CTreeTable;
