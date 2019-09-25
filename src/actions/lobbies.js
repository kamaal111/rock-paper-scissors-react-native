export const GET_ALL_LOBBIES = 'GET_ALL_LOBBIES';
export const SET_NEW_LOBBY = 'SET_NEW_LOBBY';

export const getAllLobbies = payload => ({
  type: GET_ALL_LOBBIES,
  payload: payload.doc,
});
export const setNewLobby = payload => ({
  type: SET_NEW_LOBBY,
  payload: payload.doc,
});
