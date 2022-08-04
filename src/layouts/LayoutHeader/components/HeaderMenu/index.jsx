import React, { useState } from "react";
import { Menu, Icon } from "choerodon-ui";
import { useHistory } from "react-router-dom";

// 头部菜单组件
const HeaderMenu = () => {
	const [menuState, steMenuState] = useState({
		current: "workbench",
	});
	// 跳转路由的hooks钩子
	let history = useHistory();
	// 点击切换菜单
	const handleMenuClick = (e) => {
		console.log("click :>> ", e);
		// 更新menuitem
		steMenuState({
			current: e.key,
		});
		history.push(e.key);
	};
	return (
		<>
			<Menu
				mode="horizontal"
				defaultSelectedKeys={[menuState.current]}
				onClick={handleMenuClick}
				selectedKeys={[menuState.current]}
			>
				<Menu.Item key="workbench">
					<Icon type="mail_outline" />
					工作台
				</Menu.Item>
				<Menu.Item key="worklist">
					<Icon type="mail_outline" />
					工作列表
				</Menu.Item>
				<Menu.Item key="home">
					<Icon type="mail_outline" />
					首页
				</Menu.Item>
				<Menu.Item key="calendar">
					<Icon type="mail_outline" />
					工作日历
				</Menu.Item>
				<Menu.Item key="app_market">
					<Icon type="mail_outline" />
					应用市场
				</Menu.Item>
			</Menu>
		</>
	);
};

export default HeaderMenu;
