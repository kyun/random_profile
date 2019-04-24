import { createAction, handleActions } from 'redux-actions';
import { productItems } from 'api';

// action types
export const RECEIVE_API_DATA = 'user/RECEIVE_API_DATA';
export const REQUEST_API_DATA = 'user/REQUEST_API_DATA';
export const DELETE_DATA = 'user/DELETE_DATA';

// action creators
export const receiveApiData = createAction(RECEIVE_API_DATA);
export const requestApiData = createAction(REQUEST_API_DATA);
export const deleteData = createAction(DELETE_DATA);

const initialState = {
  data: [],
  isLoading: true,
};

export default handleActions({
  [RECEIVE_API_DATA]: (state, action) => {
    let arr = action.payload.results.map(i => { return { name: i.name.first + ' ' + i.name.last, email: i.email, age: i.dob.age, nat: i.nat, url: i.picture.large } });
    return ({
      ...state,
      isLoading: false,
      data: arr
    })
  },
  [REQUEST_API_DATA]: (state, action) => {
    return ({
      ...state,
    })
  },
  [DELETE_DATA]: (state, action) => {
    return ({ 
      ...state, 
      isLoading: state.data.length <= 1 ? true : false,
      data: state.data.filter((i, j) => { return j !== state.data.length - 1 })})
  }
},initialState)