import { createAction, handleActions } from "redux-actions";

const CHANGE_INPUT = "form/CHANGE_INPUT";
const INSERT = "form/INSERT";

let id = 1;
export const changeInput = createAction(CHANGE_INPUT, (text) => text);
// 액션 생성함수가 객체를 반환
// 액션 생성함수가 함수를 반환하면, 그건 thunk가 처리
export const insert = createAction(INSERT, (text) => ({ text, id: id++ }));

export const insertThunk = text => dispatch => {
	// 하고 싶은 비동기 작업
	setTimeout(() => {
		// const date = api 호출
		dispatch(insert(text));
	}, 1000);
};

// Thunk를 거치면 반환 값의 type를 체크하여 function이 아니라면 Reducer넘겨준다
// insertThunk(insert('Hi'));
// insertThunk(insertThunk('Hi'));

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
