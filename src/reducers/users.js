import { SET_USER, GET_ALL_USERS } from '../actions/users';

const initialState = {
  activeUser: null,
  allUsers: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER:
      return { ...state, activeUser: payload };
    case GET_ALL_USERS:
      return { ...state, allUsers: payload };
    default:
      return state;
  }
};
