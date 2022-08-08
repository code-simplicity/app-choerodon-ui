import "./index.less";
import React, { useEffect, useMemo, useState } from "react";
import { Button } from "choerodon-ui";
import SelectItem from "../SelectItem";
import { DataSet } from "choerodon-ui/pro";
import { nanoid } from "nanoid";

// 模态框的内容
const ModalContent = ({ modal, dataSet, selected }) => {
	// 根据父组件给的字段生成子组件列表选中的字段
	const selectDs = useMemo(() => {
		return new DataSet({
			data: [{}],
			fields: dataSet.fields,
		});
	}, []);
	const [fiList, setfiList] = useState([]);
	const array = Array.from(dataSet.fields._data).map((item) => item[0]);
	const [canbeChosenList, setCanbeChosenList] = useState(
		array.slice(1, array.length - 6)
	); //过滤id,_cn等字段

	useEffect(() => {
		dataSet.selected.length < 1 && modal.close();
	}, [dataSet.selected.length]); //模态框关闭逻辑

	modal.handleOk(() => {
		selected = selected.map((item) => {
			//批量修改逻辑
			for (const key in selectDs.current.toData()) {
				const value = selectDs.current.toData()[key];
				if (key !== "_dirty" && value != null) {
					item.set(key, value === "empty" ? "" : value); //置空赋值处理
				}
			}
			return item;
		});
		modal.close();
		dataSet.unSelectAll();
	});
	modal.handleCancel(() => {
		//右上角关闭/取消按钮触发
		modal.close();
		dataSet.unSelectAll();
	});

	const handleDelete = (data) => {
		setfiList((be) => be.filter((item) => item !== data)); //字段缩减去重
	};

	return (
		<div className="selectList-wrapper">
			<div className="selectList">
				{fiList.map((item) => (
					<SelectItem
						key={item}
						current={selectDs.records[0]}
						dataSet={dataSet}
						item={item}
						array={canbeChosenList}
						setCanbeChosenList={setCanbeChosenList}
						handleDelete={handleDelete}
					></SelectItem>
				))}
			</div>
			<Button
				className="chooseField"
				onClick={() => {
					setfiList((be) => [...be, nanoid()]); //增加字段选择列表
				}}
			>
				+ 选择字段
			</Button>
		</div>
	);
};
export default ModalContent;
