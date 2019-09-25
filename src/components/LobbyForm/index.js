import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';

import Form from '../Form';

export default function LobbyForm({ io, setNewLobby }) {
  const [lobbyNameForm, setLobbyNameForm] = useState('');

  const changeLobbyNameText = text => setLobbyNameForm(text);

  const endLobbyNameEditting = () => {
    if (lobbyNameForm.length < 3) {
      return Alert.alert(
        'Lobby name is too short!',
        'Lobby name should contain more 2 characters',
        [
          {
            text: 'OK',
          },
        ],
        { cancelable: false },
      );
    }

    io.emit('lobby-from-client', lobbyNameForm);
    return setLobbyNameForm('');
  };

  useEffect(() => {
    io.on('send-lobby-entity-from-server', data => setNewLobby(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Form
        onEndEditing={endLobbyNameEditting}
        onChangeText={changeLobbyNameText}
        formText="Lobby name:"
        endButtonText="CREATE"
        value={lobbyNameForm}
      />
    </>
  );
}
