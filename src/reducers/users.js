import { SET_USER } from '../actions/users';

const initialState = null;

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER:
      return payload;
    default:
      return state;
  }
};
