import { SET_NEW_LOBBY, GET_ALL_LOBBIES } from '../actions/lobbies';

const initialState = {
  lobbyList: [],
};

const sortByNewToOld = (firstElement, secondElement) => {
  return secondElement.id - firstElement.id;
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_NEW_LOBBY:
      return {
        ...state,
        lobbyList: state.lobbyList
          .concat({ ...payload, users: [] })
          .sort(sortByNewToOld),
      };
    case GET_ALL_LOBBIES:
      return {
        ...state,
        lobbyList: payload.sort(sortByNewToOld),
      };
    default:
      return state;
  }
};
