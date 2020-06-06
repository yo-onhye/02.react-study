import React, { Component } from "react";
import axios from 'axios';

class App extends Component {
	state = { 
		data: null,
	};

	handleClick = async () => {
		try {
			const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
			this.setState({
				data: response.data,
			});
		} catch (e) {
			console.error(e);
		}
	};

	render() {
		const { data } = this.state;

		return (
			<div>
				<button onClick={this.handleClick} >데이터 불러오기</button>
				<ul>
					{data && data.map((item) => <li key={item.id}>{item.title}</li>)}
				</ul>
			</div>
		);
	}
}

export default App;