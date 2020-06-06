import React, { Component } from "react";
import produce from "immer";

import "./App.css";
class App extends Component {
	id = 2;
	state = {
		input: "",
		todos: [
			{
				id: 1,
				text: "제목1",
				done: true,
			},
			{
				id: 2,
				text: "제목2",
				done: true,
			},
		],
	};

	handleChange = (e) => {
		this.setState({
			input: e.target.value,
		});
	};

	// immer 사용 전
	// handleInsert = () => {
	// 	this.setState({
	// 		input: '',
	// 		todos: this.state.todos.concat({
	// 			id: ++this.id,
	// 			text: this.state.input,
	// 			done: false,
	// 		})
	// 	});
	// };

	handleInsert = (e) => {
		this.setState(
			produce((draft) => {
				draft.todos.push({
					id: this.id++,
					text: this.state.input,
					done: false,
				});
				draft.input = "";
			})
		);
	};

	// immer 사용 전
	//	handleToggle = (id) => {
	//		this.setState({
	//			todos: this.state.todos.map((todo) =>
	//				todo.id === id ? { ...todo, done: !todo.done } : todo
	//			),
	//		});
	//	};

	handleToggle = (id) => {
		this.setState(
			produce((draft) => {
				const item = draft.todos.find((item) => item.id === id);
				item.done = !item.done;
			})
		);
	};

	// handleRemove = (id) => {
	// 	this.setState({
	// 		todos: this.state.todos.filter((todo) => todo.id !== id),
	// 	});
	// };

	handleRemove = (id) => {
		this.setState(
			produce((draft) => {
				const index = draft.todos.findIndex((todo) => todo.id === id);
				draft.todos.splice(index, 1);
			})
		);
	};

	render() {
		return (
			<div>
				<div>
					<input value={this.state.value} onChange={this.handleChange} />
					<button onClick={this.handleInsert}>추가</button>
				</div>
				<ul>
					{this.state.todos.map((todo) => (
						<li
							key={todo.id}
							style={{
								textDecoration: todo.done ? "line-through" : "none",
							}}
							onClick={() => this.handleToggle(todo.id)}
							onContextMenu={() => this.handleRemove(todo.id)} // 우클릭 시 실행되는 함수
						>
							{todo.text}
						</li>
					))}
				</ul>
			</div>
		);
	}
}
export default App;
