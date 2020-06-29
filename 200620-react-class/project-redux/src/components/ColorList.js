import React, { Component } from 'react';
import './ColorList.css';

class ColorList extends Component {
	render() {
		const { list, onChange, onInsert } = this.props;

		const style = {
			width: 200,
			height: 200,
		};

		return (
			<div>
				<form className="ColorList" onSubmit={onInsert}>
					<input placeholder="원하는 색을 입력하세요" name="color" onChange={onChange}/>
					<button type="submit">추가</button>
				</form>
				<ul>
					{list.map((color) => {
						return (
							<li key={color}>
								<div style={style}>{color}</div>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}

export default ColorList;
