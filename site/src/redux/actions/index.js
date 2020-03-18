export const ADD = 'ADD';
export const SET = 'SET';
export const LOADING = 'LOADING';

export const addAction = () => ({
  type: ADD
});

export const setAction = count => ({
  type: SET,
  count,
  loading: false
});

export const loadingAction = () => ({
  type: LOADING,
  loading: true
});

const wait = (time, data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    }, time);
  })
}

export const addAsyncAction = () => async dispatch => {
  dispatch(loadingAction());
  
  const number = await wait(2000, 10);

  dispatch(setAction(number));
};

export const fetchAsyncAction = () => async dispatch => {
  dispatch(loadingAction());

  const response = await fetch('/api/number');
  const data = await response.json();

  dispatch(setAction(data));
};