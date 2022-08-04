import React, { Suspense, Fragment } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import routeList from "./routeList";

// 实现自定义路由
const CustomRouter = () => {
	const routerListRecursion = (routeList) => {
		return Object.assign(routeList).map(
			({ path, exact, children, component, LazyComponent }, key) => {
				let newItem = { path, exact, children };
				// 如果存在子路由
				if (children && children.length) {
					return (
						<Fragment key={`fragment${key}`}>
							<Route
								key={key}
								{...newItem}
								render={(props) => <LazyComponent {...props} />}
							></Route>
							<Switch key={`switch${key}`}>
								{routerListRecursion(children)}
							</Switch>
						</Fragment>
					);
				} else {
					return (
						<Route
							key={key}
							{...newItem}
							render={(props) => <LazyComponent {...props} />}
						></Route>
					);
				}
			}
		);
	};
	return (
		<HashRouter>
			<Suspense fallback={<span>Loading...</span>}>
				<Switch>{routerListRecursion(routeList)}</Switch>
			</Suspense>
		</HashRouter>
	);
};

export default CustomRouter;
