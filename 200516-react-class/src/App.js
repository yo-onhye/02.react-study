import React, { Component } from "react";
import './App.css';

class App extends Component {
	state = {
		username: "",
		password: "",
		list: [],
	};

	handleChange = (e) => {
		// const value = e.target.value;
		const { name, value } = e.target;

		this.setState({
			[name]: value,
		});
	};

	handleInsert = () => {
		// this.state가 중복되면 비구조할당
		const { list, username, password } = this.state;

		this.setState({
			list: list.concat({
				// username: username,
				// password: password 처럼
				// key와 value가 같으면 생략
				username,
				password,
			}),
			// input값 초기화 (list 선언 전에 초기화해도 괜찮음)
			username: "",
			password: "",
		});
	};

	render() {
		return (
			<div className='input_row'>
				<input value={this.state.username} name='username' onChange={this.handleChange} />
				<input value={this.state.password} name='password' onChange={this.handleChange} />
				<button onClick={this.handleInsert}>추가하기</button>
				<ul>
					{this.state.list.map((user, index) => {
						
						return (
							<li key={index}>
								{user.username}의 비밀번호는 {user.password} 입니다.
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}

export default App;
