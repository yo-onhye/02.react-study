import { createAction, handleActions } from "redux-actions";

const CHANGE_INPUT = "form/CHANGE_INPUT";
const INSERT = "form/INSERT";

let id = 1;
export const changeInput = createAction(CHANGE_INPUT, (text) => text);
export const insert = createAction(INSERT, (text) => ({ text, id: id++ }));

const initialState = {
	input: "",
	list: [],
};

export default handleActions(
	{
		[CHANGE_INPUT]: (state, action) => ({
			...state,
			input: action.payload,
		}),
		[INSERT]: (state, action) => ({
			...state,
			list: state.list.concat({
				id: action.payload.id,
				text: action.payload.text,
			}),
		}),
	},
	initialState
);
