import { SET_NEW_LOBBY } from '../actions/lobbies';

const initialState = {
  lobbyList: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_NEW_LOBBY:
      return { ...state, lobbyList: [payload, ...state.lobbyList] };
    default:
      return state;
  }
};
