import React, { Component } from "react";
import "./App.css";

class App extends Component {
	state = {
		email: "",
		isEmailVaild: false,
		password: "",
		isPasswordVaild: false,
	};

	handleUsername = (e) => {
		if (e.target.value.indexOf("@") === -1) {
			this.setState({
				email: e.target.value,
				isEmailVaild: false,
			});
		} else {
			this.setState({
				email: e.target.value,
				isEmailVaild: true,
			});
		}
	};

	handlePassword = (e) => {
		if (e.target.value.length > 5) {
			this.setState({
				password: e.target.value,
				isPasswordVaild: true,
			});
		} else {
			this.setState({
				password: e.target.value,
				isPasswordVaild: false,
			});
		}
	};

	render() {
		const { isEmailVaild, isPasswordVaild } = this.state;

		return (
			<form className='react-form'>
				<input name='email' value={this.state.email} onChange={this.handleUsername} />
				{!isEmailVaild && this.state.email !== "" ? <p className='valid_txt'>@가 없음</p> : null}
				<input name='password' value={this.state.password} onChange={this.handlePassword} />
				{!isPasswordVaild && this.state.password !== "" ? <p className='valid_txt'>길이가 6 이상이 아님</p> : null}
				<button type='submit' disabled={isEmailVaild && isPasswordVaild ? null : "disabled"} onClick={() => alert("success!")}>
					submit
				</button>
			</form>
		);
	}
}

export default App;
