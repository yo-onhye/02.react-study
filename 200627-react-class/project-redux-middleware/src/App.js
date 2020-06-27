import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeInput, insertzz } from './store/modules/form';

class App extends Component {
	handleChange = e => {
		const { value } = e.target;
		this.props.changeInput(value);
	};

	handleSubmit = e => {
		e.preventDefault();

		const { changeInput, insert, input } = this.props;

		insert(input);
		changeInput('');
	};

	render() {
		const { input, list } = this.props;

		return (
			<div>
				<form action="">
					<input value={input} onChange={this.handleChange} />
					<button onClick={this.handleSubmit}>입력</button>
				</form>
				{list.map(item => {
					return <div key={item.id}>{item.text}</div>;
				})}
			</div>
		);
	}
}

export default connect(
	({ form: { input, list } }) => ({
		input,
		list
	}),
	{
		changeInput,
		insert
	}
)(App);
