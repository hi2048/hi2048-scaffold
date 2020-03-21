import { connect } from 'react-redux';
import { CounterComponent } from './counter';
import { addAction, addAsyncAction, fetchAsyncAction } from '../../actions';

export const Counter = connect((state) => ({
  ...state.counterReducer
}), {
  addAction,
  addAsyncAction,
  fetchAsyncAction
})(CounterComponent);