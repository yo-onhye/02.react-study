import React, { Component } from "react";

class Sub extends Component {
	render() {
		// 쿼리 방식으로 url 접근하기
		const search = window.location.search;
		// search => information=true
		const params = new URLSearchParams(search);
		const info = params.get("information") === 'true' ? true : false;

		console.log(this.props);
		return (
			<div>
				<p>서브 화면입니다</p>
				{info && <div>more information</div>}
			</div>
		);
	}
}

export default Sub;
