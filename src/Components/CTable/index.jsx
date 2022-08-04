import React, { useMemo } from "react";
import { DataSet, Table, Button } from "choerodon-ui/pro";

const { Column } = Table;

const CTable = () => {
	const dataSet = useMemo(() => {
		// 返回一个DataSet的实例对象
		return new DataSet({
			// 主键字段名，一般用作级联行表的查询字段
			primaryKey: "id",
			// 对应后端接口，自动生成约定的 submitUrl, queryUrl...
			name: "user",
			// 指定 DataSet 初始化后自动查询
			autoQuery: true,
			// 请求分页大小
			pageSize: 5,
			// 数据对象名，默认值 'rows'
			dataKey: "content",
			// DataSet 中包含的字段，对应上述后端数据中每条记录中的字段
			fields: [
				{
					name: "id",
					type: "number",
					label: "ID",
				},
				{
					name: "name",
					type: "string",
					label: "姓名",
				},
				{
					name: "code",
					type: "string",
					label: "编码",
				},

				{
					name: "sex",
					type: "string",
					label: "性别",
					lookupUrl:
						"https://www.fastmock.site/mock/423302b318dd24f1712751d9bfc1cbbc/mock/EMPLOYEE_GENDER",
					required: true,
				},
				{
					name: "age",
					type: "number",
					label: "年龄",
				},
				{
					name: "email",
					type: "string",
					label: "邮箱",
				},
				{
					name: "startDate",
					type: "Date",
					label: "出生日期",
				},
				{
					name: "active",
					label: "状态",
					type: "boolean",
				},
			],
			// 接口自定义配置
			transport: {
				// 查询请求的 axios 配置或 url 字符串
				read: {
					url:
						"https://www.fastmock.site/mock/423302b318dd24f1712751d9bfc1cbbc/mock/guide/user",
					method: "GET",
				},
				destroy: {
					url:
						"https://www.fastmock.site/mock/e0e74f994719101b6a238dbfb5a7088c/record_delete/table/delete",
					method: "POST",
				},
			},
			// DS 事件回调
			events: {
				load: ({ dataSet }) => {
					console.log("加载完成", dataSet);
				},
				submit: ({ dataSet, data }) => {
					console.log(data);
					return true;
				},
			},
		});
	}, []);

	// 行内编辑
	const handleEdit = (record) => {
		record.setState("editing", true);
	};
	// 行内删除
	const handleDelete = () => {
		console.log("删除 :>> ");
	};

	// 添加的方法
	const handleAdd = () => {
		const record = dataSet.create({}, 0);
		record.setState("editing", true);
	};

	// 勾选重置的方法
	const handleReset = () => {
		dataSet.selected.map((record) => {
			// 勾选新增的数据删除，编辑的重置
			if (record.status === "add") {
				this.userDs.remove(record);
			} else {
				record.reset();
			}
			return null;
		});
	};

	// 头部保存数据的方法
	const handleSave = (records) => {
		console.log("records :>> ", records);
	};

	const handleSubmit = async () => {
		const res = await dataSet.submit();
		// 对应抛出处理
		console.log(res);
	};

	// 取消
	const handleCancel = (record) => {
		if (record.status === "add") {
			this.userDs.remove(record);
		} else {
			record.reset();
			record.setState("editing", false);
		}
	};

	// 行列的编辑的方法
	const handleCommands = ({ record }) => {
		console.log("record :>> ", record);

		const btns = [];
		if (record.getState("editing")) {
			btns.push(
				<Button
					size="small"
					color="primary"
					onClick={handleSubmit}
					style={{ marginRight: "0.1rem" }}
				>
					确认
				</Button>,
				<Button size="small" onClick={() => handleCancel(record)}>
					取消
				</Button>
			);
		} else {
			btns.push(
				<Button
					size="small"
					color="primary"
					onClick={() => handleEdit(record)}
					disabled={record.status === "delete"}
				>
					编辑
				</Button>
			);
		}
		return [
			<span className="action-link">{btns}</span>,
			<Button
				size="small"
				color="red"
				onClick={() => handleDelete(record)}
				disabled={record.status === "delete"}
			>
				删除
			</Button>,
		];
	};

	// 表格顶部的数据格式
	const tableButtons = [
		<Button onClick={handleAdd} key="add">
			新增
		</Button>,
		<Button onClick={handleSave} key="save">
			保存
		</Button>,
		<Button onClick={handleDelete} key="delete">
			删除
		</Button>,
		<Button onClick={handleAdd} key="reset">
			重置
		</Button>,
		<Button icon="undo" onClick={handleReset} key="selectReset">
			勾选重置
		</Button>,
	];

	return (
		<>
			<h1>表格数据</h1>
			<Table
				key="userTable"
				virtual
				virtualCell
				style={{ height: 300 }}
				pagination={{
					pageSizeOptions: ["10", "50", "100", "200"],
				}}
				dataSet={dataSet}
				buttons={tableButtons}
				rowNumber={({ text }) => `${text}`}
			>
				<Column name="name" editor width={150}></Column>
				<Column name="code" editor width={150}></Column>
				<Column name="sex" editor width={150}></Column>
				<Column name="age" editor width={150}></Column>
				<Column name="email" editor width={150}></Column>
				<Column name="startDate" editor width={150}></Column>
				<Column name="active" editor width={150}></Column>
				<Column
					header="操作"
					width={150}
					command={handleCommands}
					lock="right"
				/>
			</Table>
		</>
	);
};

export default CTable;
