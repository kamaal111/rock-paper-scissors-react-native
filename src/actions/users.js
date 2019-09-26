export const SET_USER = 'SET_USER';
export const GET_ALL_USERS = 'GET_ALL_USERS';

export const setUser = payload => ({
  type: SET_USER,
  payload,
});
export const getAllUsers = payload => ({
  type: GET_ALL_USERS,
  payload,
});
