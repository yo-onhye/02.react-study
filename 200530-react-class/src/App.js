import React, { Component, createRef } from "react";
import "./App.css";

class App extends Component {
	id = 1;

	state = {
		username: "",
		password: "",
		list: [],
		temp: {}, // 값을 임시 저장할 공간 생성
	};

	usernameInput = createRef();

	handleChange = (e) => {
		const { value, name } = e.target;
		this.setState({
			[name]: value,
		});
	};

	handleInsert = (e) => {
		e.preventDefault();

		const { list, username, password } = this.state;

		this.setState({
			username: "",
			password: "",
			list: list.concat({
				id: this.id,
				username,
				password,
				isActive: false,
			}),
			temp: {},
		});

		this.id++;
		this.usernameInput.current.focus();
	};

	handleDelete = (id) => {
		this.setState({
			list: this.state.list.filter((user) => user.id !== id),
		});
	};

	handleModifyToggle = (id) => {
		const { list } = this.state;

		this.setState({
			list: list.map((user) => {
				if (user.id === id) {
					return {
						...user,
						isActive: !user.isActive,
					};
				} else {
					return {
						...user,
						isActive: false,
					};
				}
			}),
			temp: list.find((user) => user.id === id),
		});
	};

	handleModifyChange = (e) => {
		const { name, value } = e.target;
		const { temp } = this.state;

		this.setState({
			temp: {
				...temp,
				[name]: value,
			},
		});
	};

	handleModifyConfirm = (e) => {
		e.preventDefault();

		const { list, temp } = this.state;

		this.setState({
			list: list.map((user) => {
				if (user.id === temp.id) {
					return temp;
				} else {
					return user;
				}
			}),
			temp: {},
		});
	};

	render() {
		const { temp } = this.state;

		return (
			<div>
				<form onSubmit={this.handleInsert}>
					<div className='input_row'>
						<input value={this.state.username} name='username' onChange={this.handleChange} ref={this.usernameInput} />
						<input value={this.state.password} name='password' onChange={this.handleChange} />
						<button type='submit'>추가하기</button>
					</div>
				</form>
				<ul className='result_list'>
					{this.state.list.map((user, index) => {
						return (
							<li key={index}>
								{user.username}의 비밀번호는 {user.password}입니다.
								<br />
								<button type='button' onClick={() => this.handleDelete(user.id)}>
									삭제하기
								</button>
								<button type='button' onClick={() => this.handleModifyToggle(user.id)}>
									수정하기
								</button>
								{user.isActive && 
									<form className='modify_bx'>
										<input type='text' name='username' autoFocus defaultValue={temp.username} onChange={this.handleModifyChange} />
										<input type='text' name='password' defaultValue={temp.password} onChange={this.handleModifyChange} />
										<button type='submnit' onClick={this.handleModifyConfirm}>
											확인
										</button>
									</form>
								}
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}
export default App;
