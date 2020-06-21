import React, { Component } from "react";
import "./ColorSquare.css";

const colors = ["#BFCD7E", "#7E57C2", "#EA80FC", "#00BCD4"];
class Color extends Component {
	render() {
		const { color, active, onSelect } = this.props;

		const style = {
			backgroundColor: color,
		};

		return (
			<div
				className={`Color ${color === active ? "active" : ""}`}
				style={style}
				onClick={() => onSelect(color)}
			/>
		);
	}
}
class ColorSquare extends Component {
	render() {
		const { number, selected, onSelect } = this.props;

		const style = {
			width: 200 + 10 * number,
			height: 200 + 10 * number,
		};

		return (
			<div className='ColorSquare' style={style}>
				{colors.map((color) => {
					return ( 
						<Color key={color} color={color} active={selected} onSelect={onSelect} />
					);
				})}
			</div>
		);
	}
}

export default ColorSquare;