import * as types from '../actions/actionTypes';

const initialState = {
  val: 'hey',
  whateves: 89
};

const gitFedReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.testing:
      return {
        ...state,
        key: initialState.key++
      };

    case types.NOTIFICATIONS:
      console.log(action.payload);
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default gitFedReducer;
