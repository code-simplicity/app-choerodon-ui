import React, { useEffect, useRef, useState } from 'react';
import { Select, CheckBox, DataSet } from 'choerodon-ui/pro';
import './index.less';
import { observer } from 'mobx-react-lite';

// 模态框内部选择组件的封装
const SelectItem = observer(
    ({ array, item, handleDelete, dataSet, setCanbeChosenList, current }) => {
        const [chosen, setChosen] = useState(null);
        const [detailList, setDetailList] = useState(); //右侧select
        const recordSelectRef = useRef(); //用于置空
        const emptyBox = useRef();
        const { Option } = Select;
        useEffect(() => {
            //根据原列表中的records项匹配字段可选项(对象形式要根据name值再去重处理)
            setDetailList(() => {
                let arr = Array.from(new Set(dataSet.records.map(record => record.get(chosen))));
                if (typeof dataSet.records[0]?.get(chosen) == 'object') {
                    let obj = {};
                    let newArr = [];
                    arr.map(item => {
                        if (!obj[item.name]) {
                            obj[item.name] = item;
                            newArr.push(item);
                        }
                        return item;
                    });
                    return newArr;
                }
                return arr;
            });
        }, [chosen]);
        //添加修改字段内容
        const handleAdd = data => {
            current.set(chosen, data);
        };
        //删除字段更改
        const handleRemove = data => {
            current.set(data, null);
        };
        return (
            <div className='selectWrapper'>
                <Select
                    name='fieldSelect'
                    className='selectItem'
                    placeholder={'请选择字段'}
                    onChange={(chosenName, bf) => {
                        //右侧清空
                        recordSelectRef.current.value = '';
                        //改变字段可选值&&设置选中项&&处理编辑项
                        if (chosenName) {
                            //把之前移除的加回来
                            array = [bf, ...array];
                            setCanbeChosenList(array.filter(item => item != chosenName && item));
                        } else {
                            handleRemove(bf);
                            setCanbeChosenList([bf, ...array]);
                        }
                        setChosen(chosenName);
                    }}
                >
                    {[...array, chosen].map(item => (
                        <Option key={item} value={item}>
                            {dataSet.getField(item)?.pristineProps.label}
                        </Option>
                    ))}
                </Select>
                <div style={{ display: chosen ? 'flex' : 'none' }}>
                    <Select
                        placeholder={dataSet.getField(chosen)?.pristineProps.label}
                        onChange={data => {
                            //对象式处理
                            if (typeof dataSet.records[0]?.get(chosen) == 'object') {
                                data = recordSelectRef.current.props.children
                                    .map(item => item.props.par)
                                    .find(item => item.name == data);
                            }
                            emptyBox.current.value = false;
                            handleAdd(data);
                        }}
                        ref={recordSelectRef}
                        name='recordSelect'
                        className='selectItem'
                    >
                        {detailList?.map((item, index) => (
                            <Option
                                key={item + index}
                                value={item?.name ? item.name : item}
                                par={item}
                            >
                                {item?.name ? item.name : item}
                            </Option>
                        ))}
                    </Select>
                    <CheckBox
                        style={{ marginLeft: '10px' }}
                        ref={emptyBox}
                        label='置空'
                        disabled={dataSet.getField(chosen)?.required ? true : false} //必填置空逻辑
                        name='isEmpty'
                        onChange={isTrue => {
                            if (isTrue) {
                                handleAdd('empty'); //置空符
                                recordSelectRef.current.value = '';
                            }
                        }}
                    >
                        置空{' '}
                    </CheckBox>
                </div>
                <div
                    className='deleteIcon'
                    onClick={() => {
                        handleRemove(chosen); //删除编辑项
                        handleDelete(item); //删除该列视图
                        setCanbeChosenList([chosen, ...array]);
                    }}
                ></div>
            </div>
        );
    },
);

export default SelectItem;
