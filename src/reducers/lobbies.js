import { SET_NEW_LOBBY, GET_ALL_LOBBIES } from '../actions/lobbies';

const initialState = {
  lobbyList: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_NEW_LOBBY:
      return { ...state, lobbyList: [payload, ...state.lobbyList] };
    case GET_ALL_LOBBIES:
      return { ...state, lobbyList: payload };
    default:
      return state;
  }
};
