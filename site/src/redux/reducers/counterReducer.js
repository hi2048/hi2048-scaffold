import { ADD, SET, LOADING } from '../actions';

export const counterReducer = (state = { count: 0, loading: false }, action) => {
  console.log(state, action);
  switch(action.type) {
    case ADD:
      return Object.assign({}, state, {
        count: state.count + 1
      })
    case SET:
      return Object.assign({}, state, {
        count: action.count,
        loading: action.loading
      })
    case LOADING:
      return {
        ...state,
        loading: action.loading
      }
    default:
      return state;
  }
};