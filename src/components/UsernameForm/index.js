import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';

import Form from '../Form';

export default function UsernameForm({ io, setUser, navigate }) {
  const [usernameForm, setUsernameForm] = useState('');

  const changeUsernameText = text => setUsernameForm(text);

  const endUsernameEditting = () => {
    if (usernameForm.length < 3) {
      return Alert.alert(
        'Name is too short!',
        'Name should contain more 2 characters',
        [
          {
            text: 'OK',
          },
        ],
        { cancelable: false },
      );
    }

    io.emit('username-from-client', usernameForm);
    navigate('Lobby', { io });
    return setUsernameForm('');
  };

  useEffect(() => {
    io.on('send-user-entity-from-server', data => setUser(data.doc));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Form
        onEndEditing={endUsernameEditting}
        onChangeText={changeUsernameText}
        formText="Name:"
        endButtonText="START"
        value={usernameForm}
      />
    </>
  );
}
