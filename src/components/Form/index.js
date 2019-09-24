import React from 'react';
import { View, TouchableOpacity, TextInput, Text } from 'react-native';

import styles from './styles';

export default function Form({
  onEndEditing,
  onChangeText,
  value,
  formText,
  endButtonText,
}) {
  return (
    <>
      <View style={styles.formContainer}>
        <Text style={styles.formText}>{formText}</Text>

        <TextInput
          editable={true}
          value={value}
          onChangeText={onChangeText}
          onEndEditing={onEndEditing}
          style={styles.form}
        />
      </View>
      <TouchableOpacity
        onPress={onEndEditing}
        style={styles.formSubmitContainer}
      >
        <Text style={styles.formSubmitText}>{endButtonText}</Text>
      </TouchableOpacity>
    </>
  );
}
