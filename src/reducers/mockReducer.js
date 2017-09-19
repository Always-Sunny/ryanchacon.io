// import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function mockReducer(state = initialState.mock, action) {
  switch (action.type) {
  // case types.LOAD_COURSES_SUCCESS:
  //     return action.mock;
  //
  // case types.CREATE_COURSE_SUCCESS:
  //   return [
  //     ...state,
  //     Object.assign({}, action.mock)
  //   ];
  //
  // case types.UPDATE_COURSE_SUCCESS:
  //   return [
  //     ...state.filter(mock => mock.id !== action.mock.id),
  //     Object.assign({}, action.mock)
  //   ];

  default:
    return state;
  }
}
