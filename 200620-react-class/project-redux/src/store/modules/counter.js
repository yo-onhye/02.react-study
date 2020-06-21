import { createAction, handleActions } from 'redux-actions';

//action
const INCREMENT = 'counter/INCREMENT'; // 액션 이름을 생성
const DECREMENT = 'counter/DECREMENT';
const CHANGE_COLOR = 'counter/CHANGE_COLOR';

// action creator (액션생성함수)
// export const increment = () =>  ({ type: INCREMENT });
export const increment = createAction(INCREMENT);
// export const decrement = () =>  ({ type: DECREMENT });
export const decrement = createAction(DECREMENT);
// export const changeColor = (color) =>  ({ type: CHANGE_COLOR, payload: color });
export const changeColor = createAction(CHANGE_COLOR);

const initialState = {
	number: 0,
	color: '#bfcd7e',
}

// reducer
export default handleActions(
	{
		[INCREMENT]: (state, action) => ({
			...state,
			number: state.number + 1,
		}),
		[DECREMENT]: (state, action) => ({
			...state,
			number: state.number - 1,
		}),
		[CHANGE_COLOR]: (state, action) => ({
			...state,
			color: action.payload,
		}),
	},
	initialState
)

// reducer
// export default function counter(state = initialState, action){
// 	switch(action.type) {
// 		case INCREMENT: return {
// 			...state,
// 			number: state.number + 1,
// 		};
// 		case DECREMENT: return {
// 			...state,
// 			number: state.number - 1.
// 		};
// 		case CHANGE_COLOR: return {
// 			...state,
// 			color: action.color, // action에 color 값을 받아오기 때문에, color 값을 받아올 수 있음
// 		}
// 		default:
// 			return state;
// 	}
// }