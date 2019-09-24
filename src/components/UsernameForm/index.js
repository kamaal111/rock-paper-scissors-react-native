import React, { useState } from 'react';
import { View, TouchableOpacity, TextInput, Text } from 'react-native';

import styles from './styles';

export default function UsernameForm({ io }) {
  const [username, setUsername] = useState('');

  const endUsernameEditting = () => {
    console.log(username);
    io.emit('username-from-client', username);
    return setUsername('');
  };

  return (
    <>
      <View style={styles.usernameFormContainer}>
        <Text style={styles.usernameFormText}>Name:</Text>

        <TextInput
          editable={true}
          value={username}
          onChangeText={text => setUsername(text)}
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
