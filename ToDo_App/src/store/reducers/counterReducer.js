import { TOTAL_COUNT_ADD, TOTAL_COUNT_DELETE, TOGGLE_COUNT } from '../actions/counterActions';


const initialState = {
totalCount: 0,
checkedCount: 0
};


export const counterReducer = (state = initialState, action) => {
switch (action.type) {
case TOTAL_COUNT_ADD:
return { ...state, totalCount: state.totalCount + 1 };


case TOTAL_COUNT_DELETE:
return { ...state, totalCount: state.totalCount > 0 ? state.totalCount - 1 : 0 };


case TOGGLE_COUNT:
return {
...state,
checkedCount: action.payload.checked
? state.checkedCount + 1
: state.checkedCount - 1
};


default:
return state;
}
};