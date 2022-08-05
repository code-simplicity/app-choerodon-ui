import React, { useEffect, useState } from 'react';
import { Menu, Icon } from 'choerodon-ui';
import { useHistory, useLocation } from 'react-router-dom';

// 头部菜单组件
const HeaderMenu = () => {
    // 跳转路由的hooks钩子
    let history = useHistory();
    // 路径
    let location = useLocation();
    const [menuState, steMenuState] = useState({
        current: location.pathname,
    });
    // 点击切换菜单
    const handleMenuClick = e => {
        // 更新menuitem
        steMenuState({
            current: e.key,
        });
        history.push(e.key);
    };
    // 如果页面刷新，获取到当前的url路径，然后赋值给菜单选中
    useEffect(() => {}, [location]);

    return (
        <>
            <Menu
                mode='horizontal'
                defaultSelectedKeys={[menuState.current]}
                onClick={handleMenuClick}
                selectedKeys={[menuState.current]}
            >
                <Menu.Item key='/'>
                    <Icon type='home-o' />
                    首页
                </Menu.Item>
                <Menu.Item key='/workbench'>
                    <Icon type='stairs' />
                    工作台
                </Menu.Item>
                <Menu.Item key='/worklist'>
                    <Icon type='featured_play_list-o' />
                    工作列表
                </Menu.Item>

                <Menu.Item key='/calendar'>
                    <Icon type='edit_calendar' />
                    工作日历
                </Menu.Item>
                <Menu.Item key='/app_market'>
                    <Icon type='app_blocking-o' />
                    应用市场
                </Menu.Item>
            </Menu>
        </>
    );
};

export default HeaderMenu;
