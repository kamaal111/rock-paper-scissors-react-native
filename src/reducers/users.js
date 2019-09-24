import { SET_USER } from '../actions/users';

const initialState = { activeUser: null };

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER:
      return { ...state, activeUser: payload };
    default:
      return state;
  }
};
