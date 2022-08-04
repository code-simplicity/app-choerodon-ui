import { HashRouter, Switch, Route } from "react-router-dom";
import "./styles/App.less";
import LayoutApp from "./layouts";

function App() {
	return (
		<HashRouter>
			<Switch>
				<Route exact path="/*">
					<LayoutApp />
				</Route>
			</Switch>
		</HashRouter>
	);
}

export default App;
