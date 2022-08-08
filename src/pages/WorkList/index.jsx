import React, { useState } from "react";
import { Button, Select, Tabs, useModal } from "choerodon-ui/pro";
import styles from "./index.module.less";
import CTreeTable from "./components/CTreeTable";
import ToDo from "./components/ToDo";
import useStores from "@src/hooks/useStores";
import { useCallback } from "react";
// import Tables from '../../components/Tables';
import CreateWorkItemsModalContent from "./components/CreateWorkItemsModalContent";

const { Option } = Select;
const { TabPane } = Tabs;

// 工作列表
const WorkList = () => {
  // 自定义钩子
  const { workListStore } = useStores();
  // 选择框的值
  const [selectState, setSelectState] = useState({
    value: workListStore.getDataTreeMode,
  });
  // 使用模态框的钩子
  const Modal = useModal();
  // 控制选择框的数据
  const handleSelectChange = (value) => {
    // 通过回调函数控制这个切换不同的表格类型
    workListStore.setDataTreeMode(value);
    //
    setSelectState({
      value: value,
    });
  };
  const [tabsActiveKey, setTabsActiveKey] = useState(
    workListStore.getWorkListTabsActiveKey
  );
  // 控制切换tabs
  const onHandleChangeTabs = (newActiveKey) => {
    // mobx控制
    workListStore.setWorkListTabsActiveKey(newActiveKey);
    // 视图的改变
    setTabsActiveKey(newActiveKey);
  };

  // 根据getDataTreeListDefaultRowExpanded控制表格数据的展开和收起状态
  const [defaultRowExpandedDataTree, setDefaultRowExpandedDataTree] = useState({
    value: workListStore.getDataTreeListDefaultRowExpanded,
  });
  // 表格tree展开和关闭按钮事件
  const customShowOrDownButton = (val) => {
    workListStore.setDataTreeListDefaultRowExpanded(val);
    setDefaultRowExpandedDataTree({
      value: val,
    });
  };

  // 自定义头部样式,
  const customPersonalModalElementsHeader = (title, closeBtn) => {
    return (
      <>
        <div className={styles["custom-personal-modal-header"]}>
          <div style={{ fontSize: "0.16rem" }}>{title}</div>
          <div>{closeBtn}</div>
        </div>
      </>
    );
  };

  // 个人筛选模态框的打开
  const onHandlePersonalScreen = useCallback(() => {
    Modal.open({
      key: "personal-screen",
      title: "个人筛选",
      drawer: true, // 抽屉模式
      okButton: false, // 关闭页脚按钮
      cancelButton: false, // 关闭页脚按钮
      closable: true, // 头部关闭按钮
      header: customPersonalModalElementsHeader, // 自定义头部
      drawerOffset: 220,
      style: { width: "4rem", right: 0, top: 66 }, // 定位
      mask: false, // 蒙层关闭
      children: (
        <div>
          <div>暂无内容</div>
        </div>
      ),
    });
  }, [Modal]);

  const ModalContent = () => {
    return (
      <div>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </div>
    );
  };

  // 导出工作项的函数
  const onHandleExportWorkItems = useCallback(() => {
    Modal.open({
      key: "export-work-items",
      title: "导出工作项",
      drawer: true,
      children: <ModalContent />,
      cancelText: "关闭",
      cancelProps: {
        color: "blue",
      },
      okButton: false,
      style: { width: "750px" },
      footer: (okBtn, cancelBtn) => {
        return <div className="flex-justify-con-end">{cancelBtn}</div>;
      },
    });
  }, [Modal]);

  // 导入工作项函数
  const onHandlerImportWorkItems = useCallback(() => {
    const modal = Modal.open({
      key: "import-work-items",
      title: "导入工作项",
      drawer: true,
      children: <ModalContent />,
      cancelText: "关闭",
      okText: "导入",
      okFirst: false, // ok按钮不排在第一个
      cancelProps: {
        color: "blue",
      }, // 自定义取消按钮的属性
      style: { width: "750px" },
      footer: () => {
        return (
          <div className="flex-justify-con-end">
            <Button
              style={{ backgroundColor: "#F2F3FD", color: "blue" }}
              onClick={closeModal}
            >
              关闭
            </Button>
            <Button color="blue">导出</Button>
          </div>
        );
      },
    });
    // 自定义关闭
    const closeModal = () => {
      modal.close();
    };
  }, [Modal]);

  // 创建工作项
  const onHandlerCreateWorkItems = useCallback(() => {
    const modal = Modal.open({
      key: "import-work-items",
      title: "创建工作项",
      drawer: true,
      children: <CreateWorkItemsModalContent />,
      cancelText: "关闭",
      okText: "导入",
      okFirst: false, // ok按钮不排在第一个
      cancelProps: {
        color: "blue",
      }, // 自定义取消按钮的属性
      style: { width: "750px" },
      footer: () => {
        return (
          <div className="flex-justify-con-end">
            <Button
              style={{ backgroundColor: "#F2F3FD", color: "blue" }}
              onClick={closeModal}
            >
              取消
            </Button>
            <Button color="blue">创建</Button>
          </div>
        );
      },
    });
    // 自定义关闭
    const closeModal = () => {
      modal.close();
    };
  }, [Modal]);

  return (
    <div className={styles["work-list-container"]}>
      <div className={styles["work-list-header"]}>
        <div>
          <h3>工作列表</h3>
        </div>
        <div className={styles["work-list-right"]}>
          {tabsActiveKey !== "ToDo" ? (
            <div className={styles["work-list-select"]}>
              <Select
                style={{ width: "9em" }}
                defaultActiveFirstOption={false}
                placeholder="请选择"
                onChange={handleSelectChange}
                value={selectState.value}
              >
                <Option value="tree">树形视图</Option>
                <Option value="list">列表视图</Option>
              </Select>
            </div>
          ) : null}
          <Button icon="refresh"></Button>
          {tabsActiveKey !== "ToDo" ? (
            <>
              {/* 如果是树形那就可以进行展示，如果不是按钮就不显示 */}
              {selectState.value === "tree" ? (
                !defaultRowExpandedDataTree.value ? (
                  <Button
                    icon="format_indent_increase"
                    color="blue"
                    onClick={() => customShowOrDownButton(true)}
                  >
                    全部展开
                  </Button>
                ) : (
                  <Button
                    icon="format_indent_increase"
                    color="blue"
                    onClick={() => customShowOrDownButton(false)}
                  >
                    全部收起
                  </Button>
                )
              ) : null}
              <Button icon="settings-o" onClick={onHandlePersonalScreen}>
                个人筛选
              </Button>
              <Button icon="unarchive-o" onClick={onHandleExportWorkItems}>
                导出工作项
              </Button>
              <Button icon="archive-o" onClick={onHandlerImportWorkItems}>
                导入工作项
              </Button>
            </>
          ) : null}
          <Button
            color="blue"
            icon="playlist_add"
            onClick={onHandlerCreateWorkItems}
          >
            创建工作项
          </Button>
        </div>
      </div>
      {/* tabs的组件 */}
      <div className={styles["work-list-tabs"]}>
        <Tabs
          activeKey={tabsActiveKey}
          onChange={onHandleChangeTabs}
          style={{ height: 520 }}
        >
          <TabPane tab="待办事项" key="ToDo">
            <ToDo></ToDo>
          </TabPane>
          <TabPane tab="所有工作项" key="AllWorks">
            <CTreeTable></CTreeTable>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default WorkList;
