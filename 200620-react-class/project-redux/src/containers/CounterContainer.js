// container component (smart component)
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators }from "redux";
// import { increment, decrement } from "../store/modules/counter";
import * as CounterActions from '../store/modules/counter';
import Counter from "../components/Counter";

class CounterContainer extends Component {
	render() {
		const { color, number, counterActions } = this.props;

		return <Counter color={color} number={number} increment={counterActions.increment} decrement={counterActions.decrement} />;
	}
}

const mapStateToProps = (state) => ({
	number: state.counter.number,
	color: state.counter.color,
});

// const mapDispatchToProps = (dispatch) => ({
// 	increment: () => dispatch(increment()),
// 	decrement: () => dispatch(decrement()),
// });

const mapDispatchToProps = distach => ({
	counterActions: bindActionCreators(CounterActions, distach),
})

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);

// connect => HOC
// HOC(Component) => Enhanced Component
