import React, { Component } from "react";
import "./App.css";

import Form from "./components/Form";
import List from "./components/List";

class App extends Component {
	// App 컴포넌트가 x라는 상태값을 관리하고 있으면, x를 위한 핸들러 함수는 동일하게 App에다 만든다
	// list는 App.js가 담당하고 있으니까, App.js에 만들어줘야 한다.
	// props로 form.js에 이벤트를 내려준다. (handleInsert)

	id = 1; // 고유한 key 값 생성

	state = {
		todos: [],
	};

	handleInsert = (text) => {
		// const { input } = this.state;

		this.setState({
			todos: this.state.todos.concat({
				text, // form에서 받는 text 값
				id: this.id,
				done: false, // 체크 값 (초기 fasle)
			}),
		});
		this.id++;
	};

	handleCheck = (id) => {
		this.setState({
			todos: this.state.todos.map((todo) => {
				if (todo.id === id) {
					return {
						...todo,
						done: !todo.done,
					};
				} else {
					return todo;
				}
			}),
		});
	};
	
	handleDelte = (id) => {
		this.setState({
			todos: this.state.todos.filter((todo) => todo.id !== id),
		});
	};

	render() {
		return (
			<div className="App">
				<h3>TODO LIST</h3>
				<Form onInsert={this.handleInsert} />
				<List todos={this.state.todos} onCheck={this.handleCheck} onDelete={this.handleDelte} />
			</div>
		);
	}
}

export default App;
