import React, { useState } from 'react';
import { Alert } from 'react-native';

import Form from '../Form';

export default function LobbyForm() {
  const [lobbyNameForm, setLobbyNameForm] = useState('');

  const changeLobbyNameText = text => setLobbyNameForm(text);

  const endLobbyNameEditting = () => {
    if (lobbyNameForm.length <= 3) {
      return Alert.alert(
        'Lobby name is too short!',
        'Lobby name should contain more 2 characters',
        [
          {
            text: 'OK',
            onPress: () => console.log('OK Pressed'),
          },
        ],
        { cancelable: false },
      );
    }

    return setLobbyNameForm('');
  };

  console.log('lobbyNameForm', lobbyNameForm);

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
