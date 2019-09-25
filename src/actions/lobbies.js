export const SET_NEW_LOBBY = 'SET_NEW_LOBBY';

export const setNewLobby = payload => ({
  type: SET_NEW_LOBBY,
  payload: payload.doc,
});
