import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, TextInput, Text, Alert } from 'react-native';

import styles from './styles';

export default function UsernameForm({ io }) {
  const [usernameForm, setUsernameForm] = useState('');
  const [username, setUsername] = useState(null);

  const endUsernameEditting = () => {
    if (usernameForm.length <= 3) {
      return Alert.alert(
        'Name is too short!',
        'Name should container more 2 characters',
        [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
        { cancelable: false },
      );
    }

    io.emit('username-from-client', usernameForm);
    return setUsernameForm('');
  };

  useEffect(() => {
    io.on('send-entity-from-server', data => setUsername(data.doc.name));
  }, []);

  return (
    <>
      <View style={styles.usernameFormContainer}>
        <Text style={styles.usernameFormText}>Name:</Text>

        <TextInput
          editable={true}
          value={usernameForm}
          onChangeText={text => setUsernameForm(text)}
          onEndEditing={endUsernameEditting}
          style={styles.usernameForm}
        />
      </View>
      <TouchableOpacity
        onPress={endUsernameEditting}
        style={styles.usernameFormSubmitContainer}
      >
        <Text style={styles.usernameFormSubmitText}>Start</Text>
      </TouchableOpacity>
    </>
  );
}
