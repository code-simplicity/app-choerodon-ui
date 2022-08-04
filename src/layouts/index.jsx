import React from "react";
import { Layout } from "choerodon-ui";
import LayoutHeader from "./LayoutHeader";
import LayoutSider from "./LayoutSider";
import LayoutContents from "./LayoutContents";

// 布局样式
const LayoutApp = () => {
	return (
		<Layout style={{ height: "100vh" }}>
			{/* 头部组件 */}
			<LayoutHeader />
			<Layout>
				{/* 侧边栏 */}
				<LayoutSider />
				{/* 内容区域 */}
				<Layout style={{ padding: "10px 24px 24px" }}>
					<LayoutContents />
				</Layout>
			</Layout>
		</Layout>
	);
};
export default LayoutApp;
