import { Select } from "choerodon-ui/pro";
import React, { useState } from "react";

const { Option } = Select;

// 头部搜索组件
const CSearch = () => {
	const [searchState, setSearchState] = useState({
		value: "",
	});
	// 改变下拉选择的事件
	const handleChange = (value, oldValue) => {
		console.log("[constrolled]", "value", value, "oldValue", oldValue);
		setSearchState({
			value: value,
		});
	};
	return (
		<>
			<Select
				name="last-name"
				placeholder="请选择"
				value={searchState.value}
				onChange={handleChange}
			>
				<Option value="jack">Jack</Option>
				<Option value="lucy">Lucy</Option>
				<Option value="wu">Wu</Option>
			</Select>
		</>
	);
};
export default CSearch;
