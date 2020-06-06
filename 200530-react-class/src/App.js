import React, { Component, createRef } from "react";
import "./App.css";

class App extends Component {
	id = 1;

	state = {
		username: "",
		password: "",
		list: [],
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
				username,
				password,
				id: this.id,
			}),
		});

		this.id++;
		this.usernameInput.current.focus();
	};

	handleDelete = (id) => {

		this.setState({
			list: this.state.list.filter((user) => user.id !== id),
		});
	};

	handleChange2 = (e, id) => {
		const { value, name } = e.target;

		this.setState({
			[name]: value,
			list: this.state.list.map((user) => (id === user.id ? { ...user, ...value } : user)),
		});

		console.log(value);
		console.log(id);
	};

	handleModify = (id, data) => {
		this.setState({
			list: this.state.list.map((user) => (id === user.id ? { ...user, ...data } : user)),
		});
		console.log(data);
	};

	render() {
		const { list, username, password } = this.state;

		return (
			<div>
				<form onSubmit={this.handleInsert}>
					<div className='input_row'>
						<input value={this.state.username} name='username' onChange={this.handleChange} ref={this.usernameInput} />
						<input value={this.state.password} name='password' onChange={this.handleChange} />
						<button type='submit'>추가하기</button>
					</div>
				</form>
				<ul className="result_list">
					{this.state.list.map((user, index) => {
						return (
							<li key={index}>
								{user.username}의 비밀번호는 {user.password}입니다.
								<br />
								<button type='button' onClick={() => this.handleDelete(user.id)}>
									삭제하기
								</button>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}
export default App;