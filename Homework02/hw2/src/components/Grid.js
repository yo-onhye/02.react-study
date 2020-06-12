import React, { Component } from "react";
import Card from "./Card";
import { chunk } from "../utils";

class Grid extends Component {
	render() {
		const { list, onToggle, tempOpen } = this.props;

		return (
			<div className='Grid'>
				{/* split the list into lists with 8 elements each for better view */}
				{chunk(list, 8).map((l) => {
					return (
						<div key={this.id++}>
							{l.map((card) => {
								return (
									// TODO
									<button
										kye={card.id}
										className='Card'
										onClick={(e) => {
											e.stopPropagation();
											onToggle(card.id);
											tempOpen(card.id, card.value);
										}}
										disabled={card.isShow}
									>
										<Card card={card} />
									</button>
								);
							})}
						</div>
					);
				})}
			</div>
		);
	}
}

export default Grid;
