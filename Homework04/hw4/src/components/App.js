import React, { Component } from "react";
import Main from "./Main";
import Profile from "./Profile";
import Fortune from "./Fortune";
import { Route, Link, Switch, Redirect } from "react-router-dom";

class App extends Component {
	render() {
		return (
			<div className='App'>
				<Switch>
					<Redirect exact from='/' to='/main' />
					<Route path='/main' component={Main} />
					<Route path='/profile' component={Profile} />
					<Route path='/fortune/:name&:birthday' component={Fortune} />
					<Route path='/TAzzang' render={() => <div>404 NOT FOUND</div>} />
				</Switch>
			</div>
		);
	}
}

export default App;
