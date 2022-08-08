/*
 * @Author: guanhaobin 1643614692@qq.com
 * @Date: 2022-08-05 17:15:42
 * @LastEditors: guanhaobin 1643614692@qq.com
 * @LastEditTime: 2022-08-07 22:50:48
 * @FilePath: \c7n-ui-demo\src\components\Forms\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useMemo, useCallback, useState, useEffect } from "react";

import {
	DataSet,
	Form,
	TextField,
	Password,
	NumberField,
	EmailField,
	UrlField,
	DatePicker,
	Select,
	SelectBox,
	Button,
	Menu,
	Dropdown,
	Icon,
} from "choerodon-ui/pro";
import JSONFormatter from "choerodon-ui/pro/lib/code-area/formatters/JSONFormatter";

import FormDS from "./DataSet";

function FooterForms(props) {
	const formDataSet = useMemo(() => {
		return new DataSet(FormDS);
	});
	const [formState, setFormState] = useState({
		selectValue: "",
	});

	return (
		<div>
			<Form dataSet={formDataSet}>
				<div style={{ display: "flex", alignItems: "center" }}>
					<div>
						<Select
							name="type"
							style={{ width: 80 }}
							optionRenderer={({ record, text, value }) => {
								// console.log(record, text, value);
								if (value == "task")
									return [<Icon type="agile_task" />, "任务"];
								if (value == "fault")
									return [<Icon type="agile_fault" />, "缺陷"];
								if (value == "story")
									return [<Icon type="agile_story" />, "故事"];
							}}
						/>
					</div>
					<div>
						<Select name="agent" style={{ width: 80 }} />
					</div>
					<div style={{ flex: "1" }}>
						<div style={{ display: "flex", alignItems: "center" }}>
							<TextField
								name="description"
								placeholder="请输入工作概要"
								showLengthInfo
								style={{ flex: "1" }}
								minLength={0}
								maxLength={100}
							/>
							<div>
								<Button
									type="submit"
									funcType="flat"
									disabled={!true}
									color="primary"
									onClick={() => {
										formDataSet.submit();
									}}
								>
									确定
								</Button>
								<Button
									type="reset"
									funcType="flat"
									color="primary"
									style={{ marginRight: 8 }}
									onClick={() => {
										props.handleDisplay();
									}}
								>
									取消
								</Button>
							</div>
						</div>
					</div>
				</div>
			</Form>
		</div>
	);
}

export default FooterForms;
