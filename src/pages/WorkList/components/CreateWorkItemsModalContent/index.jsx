import React from "react";
import {
	Form,
	TextField,
	Row,
	Col,
	RichText,
	Select,
	Button,
} from "choerodon-ui/pro";

const { Option } = Select;

// 创建工作列表项模态框内容
const CreateWorkItemsModalContent = () => {
	const options = {
		modules: {
			toolbar: [
				["bold", "italic", "underline", "strike"], // toggled buttons
				["blockquote", "code-block"],

				[{ header: 1 }, { header: 2 }], // custom button values
				[{ list: "ordered" }, { list: "bullet" }],
				[{ script: "sub" }, { script: "super" }], // superscript/subscript
				[{ indent: "-1" }, { indent: "+1" }], // outdent/indent
				[{ direction: "rtl" }], // text direction

				[{ size: ["small", false, "large", "huge"] }], // custom dropdown
				[{ header: [1, 2, 3, 4, 5, 6, false] }],

				[{ color: [] }, { background: [] }], // dropdown with defaults from theme
				[{ font: [] }],
				[{ align: [] }],

				["clean"], // remove formatting button
			],
			imageDropAndPaste: false,
		},
	};
	return (
		<div clssName="">
			<Row
				type="flex"
				justify="space-between"
				gutter={16}
				className="margin-b-2"
			>
				<Col span={12}>
					<div>
						<span>工作项类型</span>
						<Select
							className="width-full"
							style={{
								border: "0 solid #fff",
							}}
						>
							<Option value="1">选择值</Option>
							<Option value="2">选择值</Option>
						</Select>
					</div>
				</Col>
				<Col span={12}>
					<Select className="width-full">
						<Option value="1">选择值</Option>
						<Option value="2">选择值</Option>
					</Select>
				</Col>
			</Row>
			<Row className="margin-b-2">
				<Col span={24}>
					<TextField className="width-full" placeholder="请输入任务概要" />
				</Col>
			</Row>
			<div style={{ height: "280px" }} className="margin-b-2">
				<RichText
					mode="editor"
					style={{ height: "260px" }}
					options={options}
					toolbar="none"
				/>
			</div>
			<div className="margin-b-2">
				<Button color="primary">上传附件</Button>
			</div>
			<div>
				<Row
					type="flex"
					justify="space-between"
					gutter={16}
					className="margin-b-2"
				>
					<Col span={12}>
						<Select className="width-full">
							<Option value="1">选择值</Option>
							<Option value="2">选择值</Option>
						</Select>
					</Col>
					<Col span={12}>
						<Select className="width-full">
							<Option value="1">选择值</Option>
							<Option value="2">选择值</Option>
						</Select>
					</Col>
				</Row>
				<Row
					type="flex"
					justify="space-between"
					gutter={16}
					className="margin-b-2"
				>
					<Col span={12}>
						<Select className="width-full">
							<Option value="1">选择值</Option>
							<Option value="2">选择值</Option>
						</Select>
					</Col>
					<Col span={12}>
						<Select className="width-full">
							<Option value="1">选择值</Option>
							<Option value="2">选择值</Option>
						</Select>
					</Col>
				</Row>
				<Row
					type="flex"
					justify="space-between"
					gutter={16}
					className="margin-b-2"
				>
					<Col span={12}>
						<Select className="width-full">
							<Option value="1">选择值</Option>
							<Option value="2">选择值</Option>
						</Select>
					</Col>
					<Col span={12}>
						<Select className="width-full">
							<Option value="1">选择值</Option>
							<Option value="2">选择值</Option>
						</Select>
					</Col>
				</Row>
				<Row
					type="flex"
					justify="space-between"
					gutter={16}
					className="margin-b-2"
				>
					<Col span={12}>
						<Select className="width-full">
							<Option value="1">选择值</Option>
							<Option value="2">选择值</Option>
						</Select>
					</Col>
					<Col span={12}>
						<Select className="width-full">
							<Option value="1">选择值</Option>
							<Option value="2">选择值</Option>
						</Select>
					</Col>
				</Row>
				<Row
					type="flex"
					justify="space-between"
					gutter={16}
					className="margin-b-2"
				>
					<Col span={12}>
						<Select className="width-full">
							<Option value="1">选择值</Option>
							<Option value="2">选择值</Option>
						</Select>
					</Col>
					<Col span={12}>
						<Select className="width-full">
							<Option value="1">选择值</Option>
							<Option value="2">选择值</Option>
						</Select>
					</Col>
				</Row>
				<Row
					type="flex"
					justify="space-between"
					gutter={16}
					className="margin-b-2"
				>
					<Col span={12}>
						<Select className="width-full">
							<Option value="1">选择值</Option>
							<Option value="2">选择值</Option>
						</Select>
					</Col>
					<Col span={12}>
						<Select className="width-full">
							<Option value="1">选择值</Option>
							<Option value="2">选择值</Option>
						</Select>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default CreateWorkItemsModalContent;
