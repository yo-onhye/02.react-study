import React, { Component } from "react";
import "./App.css";

import Timer from "./components/Timer";
import Grid from "./components/Grid";
import ScoreBoard from "./components/ScoreBoard";

import { shuffle } from "./utils";

class App extends Component {
	/* This values are not stored in state because they do not affect rendering */

	//TODO: add id property for list's key property
	id = 1;

	// number of same cards in a deck
	same_cards = 2;
	// type of cards
	pool = "0123456789ABCDEF".split("");
	// cards that are flipped (but not correct, yet)
	opened_cards = [];

	state = {
		score: 0, // number of correct answers
		cards: [], // list of cards
	};

	initGame = () => {
		let cards = [];
		for (var i = 0; i < this.same_cards; i++) {
			cards = cards.concat(
				shuffle(this.pool).map((val) => {
					return {
						//TODO: populate the list with properties of Object
						id: this.id++,
						value: val,
						isShow: false,
					};
				})
			);
		}

		this.setState({
			score: 0,
			cards: cards,
		});
	};

	//TODO: implement me
	handleToggle = (id) => {
		this.setState({
			cards: this.state.cards.map((card) => {
				if (card.id === id) {
					return {
						...card,
						isShow: !card.isShow,
					};
				} else {
					return card;
				}
			}),
		});
	};

	//open upto same_cards to see if user's choice is correct or not
	tempOpen = async (id, value) => {
		this.opened_cards.push({ id: id, value: value });
		// opened a wrong card :
		// since every card in opened_cards should have same value,
		// if the first card value !== last(just opened) value,
		// it means that the last card was wrong choice.
		if (this.opened_cards[0].value !== value) {
			await new Promise((r) => setTimeout(r, 700)); // show card briefly
			this.opened_cards.map((x) => this.handleToggle(x.id)); // flip back the open cards
			this.opened_cards = []; //reset the open cards
		} else if (this.opened_cards.length === this.same_cards) {
			// if we have chosen all the cards with certain value
			this.setState({
				score: this.state.score + this.opened_cards.length,
			});
			this.opened_cards = [];
		}
	};

	render() {
		const { cards, score } = this.state;
		// the game is finished if score equals the number of cards
		const done = score === cards.length;

		return (
			<div className='App'>
				<h3>Memory Game</h3>

				{/* <Grid /> TODO: look at Grid.js to see which props to pass */}
				<Grid list={cards} onToggle={this.handleToggle} tempOpen={this.tempOpen} />
				{/* <ScoreBoard /> TODO: what should be passed to scoreBoard? */}
				<ScoreBoard score={score} total={cards.length} />
				<Timer running={!done} />
				{done && <button onClick={this.initGame}> Start </button>}
			</div>
		);
	}
}

export default App;
