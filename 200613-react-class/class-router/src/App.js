import React, { Component } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import Main from "./Main";
import Sub from "./Sub";
import Users from "./Users";
class App extends Component {
	render() {
		return (
			<div>
				<ul>
					<li>
						<NavLink activeStyle={{ color: "blue" }} to='/'>
							메인화면으로 가기
						</NavLink>
					</li>
					<li>
						<NavLink activeStyle={{ color: "blue" }} to='/sub'>
							서브화면으로 가기
						</NavLink>
					</li>
				</ul>
				<Switch>
					<Route exact path='/' component={Main} />
					<Route path='/users' component={Users} />
					<Route render={(props) => <Users {...props} something='something' />} />
					<Route render={() => <div>404 NOT FOUND</div>} />
				</Switch>
			</div>
		);
	}
}
export default App;
