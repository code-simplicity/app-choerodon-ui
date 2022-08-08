import { observer } from 'mobx-react-lite';
import React, { useEffect, useState, useCallback } from 'react';
import ModalContent from '../ModalContent';
import { useModal } from 'choerodon-ui/pro';
import './index.less';

// 模块退出组件
const Modala = observer(props => {
    // props进行结构
    const { dataSet } = props;
    const [first, setFirst] = useState(true); //限制首次加载的弹出
    // 模态框弹出的hooks
    const Modal = useModal();
    // 打开模态框的方法
    const openModal = useCallback(() => {
        Modal.open({
            title: (
                <div>
                    <span className='count'>{` ${dataSet.selected.length}`}</span>
                    <span className='text'>项已选中</span>
                </div>
            ),
            children: <ModalContent selected={dataSet.selected} dataSet={dataSet} />,
            okText: '确定',
            cancelText: '取消',
            okFirst: false, //确定键位置
            okProps: { disabled: false },
            mask: false,
            key: 'pl',
            border: false,
            closable: true,
            className: 'modal-purple', //防止自定义c7n影响全局
        }); //设置KEY后可以避免重复生成模态框
    }, [Modal]);
    // 通过判断是否是第一次加载页面，dataSet的长度改变之后就触发显示
    useEffect(() => {
        !first && openModal();
        setFirst(false);
    }, [dataSet.selected.length]);
    return <div style={{ display: 'none' }} className='modala-wrapper'></div>;
});
export default Modala;
