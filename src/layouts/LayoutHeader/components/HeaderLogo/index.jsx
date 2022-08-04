import React from "react";
import styles from "./index.module.less";

// app的logo组件
const HeaderLogo = () => {
	return (
		<div className={styles["header-logo-container"]}>
			<div>Choerodn UI管理平台</div>
		</div>
	);
};
export default HeaderLogo;
