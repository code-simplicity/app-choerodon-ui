import React from "react";
import { Layout } from "choerodon-ui";
import { Route, Redirect } from "react-router-dom";

import WorkBench from "../../pages/WorkBench";
import Calendar from "../../pages/Calendar";
import WorkList from "../../pages/WorkList";
import Home from "../../pages/Home";
const { Content } = Layout;

// 内容区域组件
const LayoutContents = () => {
	return (
		<Content>
			<Redirect to="/workbench"></Redirect>
			<Route key="workbench" path="/workbench">
				<WorkBench />
			</Route>
			<Route key="calendar" path="/calendar">
				<Calendar />
			</Route>
			<Route key="worklist" path="/worklist">
				<WorkList />
			</Route>
			<Route key="home" path="/home">
				<Home />
			</Route>
		</Content>
	);
};

export default LayoutContents;
