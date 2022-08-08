import React, { useState } from "react";
import { Select, Row, Col, Menu, Dropdown, Icon } from "choerodon-ui/pro";
import "./index.less";
import { Button } from "choerodon-ui/lib/radio";
const { Option } = Select;
const Selects = () => {
  const states = {
    hidden: true,
    disabled: true,
  };
  const [state, setState] = useState(states);
  const handleMenuClick = (e) => {
    if (e.key === "3") {
      setState({ hidden: true });
    }
    if (e.key === "1") {
      setState({ disabled: false });
    }
  };
  const handleToggleDropdown = () => {
    setState({ hidden: !state.hidden });
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">Clicking me will not close the menu.</Menu.Item>
      <Menu.Item key="2" disabled={state.disabled}>
        Clicking me will not close the menu also.
      </Menu.Item>
      <Menu.Item key="3">Clicking me will close the menu</Menu.Item>
    </Menu>
  );
  return (
    <div className="selectsWrapper">
      <div className="search">
        <input type="text" placeholder="请输入搜索内容" />
      </div>

      <Select
        //下拉匹配选项宽度关闭
        // dropdownMatchSelectWidth={false}
        //下拉菜单样式
        // dropdownMenuStyle={{ width: "150px" }}
        multiple
        combo
        placeholder="我的筛选"
        className="selectsItem"
        dropdownMatchSelectWidth={false}
        dropdownMenuStyle={{ width: "150px" }}
      >
        <Option value="jack">仅我的工作项</Option>
        <Option value="lucy">我的关注</Option>
        <Option value="wu">我经手的</Option>
      </Select>

      <Select
        multiple
        combo
        searchable
        placeholder="工作类型"
        className="selectsItem"
        dropdownMatchSelectWidth={false}
        dropdownMenuStyle={{ width: "150px" }}
      >
        <Option value="jack">子任务</Option>
        <Option value="lucy">任务</Option>
        <Option value="qx">缺陷</Option>
        <Option value="gs">故事</Option>
        <Option value="ss">史诗</Option>
      </Select>

      <Select
        multiple
        combo
        searchable
        placeholder="状态"
        className="selectsItem"
        dropdownMatchSelectWidth={false}
        dropdownMenuStyle={{ width: "150px" }}
      >
        <Option value="jack">待处理</Option>
        <Option value="lucy">处理中</Option>
        <Option value="qx">已完成</Option>
        <Option value="gs">待测试</Option>
      </Select>

      <Select
        multiple
        combo
        searchable
        placeholder="经办人"
        className="selectsItem"
        dropdownMatchSelectWidth={false}
        dropdownMenuStyle={{ width: "150px" }}
      ></Select>
      <Select
        multiple
        combo
        searchable
        placeholder="冲刺"
        className="selectsItem"
        dropdownMatchSelectWidth={false}
        dropdownMenuStyle={{ width: "150px" }}
      >
        <Option value="jack">未分配冲刺</Option>
        <Option value="lucy">冲刺中</Option>
      </Select>
      <Select
        multiple
        combo
        searchable
        placeholder="优先级"
        className="selectsItem"
        dropdownMatchSelectWidth={false}
        dropdownMenuStyle={{ width: "150px" }}
      >
        <Option value="jack">高</Option>
        <Option value="lucy">中</Option>
        <Option value="qx">低</Option>
      </Select>
      <Select
        multiple
        combo
        searchable
        placeholder="史诗"
        className="selectsItem"
        dropdownMatchSelectWidth={false}
        dropdownMenuStyle={{ width: "150px" }}
      >
        <Option value="jack">未分配史诗</Option>
      </Select>

      <Dropdown overlay={menu} hidden={state.hidden}>
        <Button className="btn" key="add" onClick={handleToggleDropdown}>
          <span className="icon">添加筛选</span>
          {/* <Icon type="arrow_drop_down" /> */}
        </Button>
      </Dropdown>
    </div>
  );
};
export default Selects;
