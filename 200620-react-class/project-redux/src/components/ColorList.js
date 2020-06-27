import React, { Component } from 'react';
import './ColorList.css';

class ColorList extends Component {
	render() {
		const { changeInput } = this.props;

		return (
			<div>
				<form className="ColorList">
					<input placeholder="원하는 색을 입력하세요" name="color" onChange={() => changeInput}/>
				</form>
			</div>
		);
	}
}

export default ColorList;
