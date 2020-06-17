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
		if (!e.target.value.includes("@")) {
			// 문자열 체크 search(), indexOf(), includes() 사용 가능
			// search(), indexOf()는 -1, 0으로 결과 반환
			// includes()는 boolean값으로 결과 반환
			// constains() 사용 시 TypeError 발생. 원인 확인 예정
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
				<input type='text' name='email' value={this.state.email} onChange={this.handleUsername} />
				{!isEmailVaild && this.state.email !== "" ? <p className='valid_txt'>@가 없음</p> : null}
				<input type='text' name='password' value={this.state.password} onChange={this.handlePassword} />
				{!isPasswordVaild && this.state.password !== "" ? <p className='valid_txt'>길이가 6 이상이 아님</p> : null}
				<button type='submit' disabled={!isEmailVaild && isPasswordVaild} onClick={() => alert("success!")}>
					submit
				</button>
			</form>
		);
	}
}

export default App;
