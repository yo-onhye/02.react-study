import React, { Component } from "react";
import axios from "axios";
import { setupCache } from "axios-cache-adapter";
import "./App.css";

const cache = setupCache({
	maxAge: 15 * 60 * 1000,
});

const api = axios.create({
	adapter: cache.adapter,
});

class App extends Component {
	state = {
		birthday: "",
		data: null,
	};

	handleChange = (e) => {
		const { value, name } = e.target;

		this.setState({
			[name]: value,
		});
	};

	// 로또 번호 호출 (멀티 리퀘스트 호출)
	handleClickLotto = async () => {
		try {
			const lottoArr = await axios.all([axios.get("http://askat.me:8000/api/lotto1"), axios.get("http://askat.me:8000/api/lotto2")]).then((lottoArr) => {
				const flatMapReducer = (accumulator, value) => {
					const key = "data";
					if (value.hasOwnProperty(key) && Array.isArray(value[key])) {
						value[key].forEach(val => {
							if (accumulator.indexOf(val) === -1) {
								accumulator.push(val);
							}
						});
					}
					return accumulator;
				};
				const lottoData = lottoArr.reduce(flatMapReducer, []); 
				this.setState({
					data: lottoData.join(' '),
				});
			});
		} catch (e) {
			console.log("error");
		}
	};

	// 생일 입력 받아 정보 호출
	handleClickFortune = async () => {
		const { birthday } = this.state;

		if(birthday !== "") {
			axios.get("http://askat.me:8000/api/fortune/" + birthday).then((response) => {
				this.setState({
					data: response.data,
				});
			});
		} else {
			alert("ooops!");
		}
	};

	// 404 에러 캐치하여 alert
	handleClickBad = async () => {
		try {
			const response = await axios.get("http://askat.me:8000/api/bad").then((response) => {
				this.setState({
					data: response.data,
				});
			});
		} catch (e) {
			alert("ooops!");
		}
	};

	// 캐시 저장하여 한번만 호출
	handleClickSlow = async () => {
		try {
			api.get("http://askat.me:8000/api/slow").then((response) => {
				this.setState({
					data: response.data,
				});
			});
		} catch (e) {
			console.log("error");
		}
	};

	render() {
		const { data } = this.state;

		return (
			<div className='input-bx'>
				<button onClick={this.handleClickLotto}>로또 번호 불러오기</button>
				<input type='date' name='birthday' placeholder='YYYY-MM-DD' onChange={this.handleChange} />
				<button onClick={this.handleClickFortune}>생일 입력</button>
				<button onClick={this.handleClickBad}>Bad API 불러오기</button>
				<button onClick={this.handleClickSlow}>Slow API 불러오기</button>
				<p>{data}</p>
			</div>
		);
	}
}

export default App;
