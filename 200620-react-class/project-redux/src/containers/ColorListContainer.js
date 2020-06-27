import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as ColorListActions from "../store/modules/colorList";
import { changeInput } from "../store/modules/colorList";
// import { changeInput, remove, update, insert } from '../store/modules/colorList';
import ColorList from "../components/ColorList";

class ColorListContainer extends Component {
	// 이곳에서 값을 제어하는 함수 생성
	// ColorList는 보여주기만 함
	handleChange = (e) => {
		const { changeInput } = this.props.counterActions;
		changeInput(e.target.value);
	};

	handleInsert = () => {};
	handleUpdate = () => {};
	handleRemove = () => {};

	render() {
		const { list, input, handleChange } = this.props;

		return <ColorList list={list} input={input} onChange={handleChange} />;
	}
}

const mapDispatchToProps = (dispatch) => ({
	colorListActions: bindActionCreators(ColorListActions, dispatch),
});

// const mapStateToProps = ({colorList}) => ({
// 	list: colorList.list,
// 	input: colorList.input,
// })

// export default connect(	mapStateToProps, mapDispatchToProps)(ColorListContainer);

export default connect(
	({ colorList }) => ({
		list: colorList.list,
		input: colorList.input,
	}),
	mapDispatchToProps
)(ColorListContainer);
