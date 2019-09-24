/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import socketIO from 'socket.io-client';

export default function App() {
  const io = socketIO('http://127.0.0.1:4000');

  useEffect(() => {
    io.on('message-from-server', data => console.log('data', data));
  }, []);

  return (
    <View>
      <Text>Hallo</Text>
      <Text>Hallo</Text>
      <Text>Hallo</Text>
      <Text>Hallo</Text>
      <Text>Hallo</Text>
      <Text>Hallo</Text>
      <Text>Hallo</Text>
      <Text>Hallo</Text>
      <Text>Hallo</Text>
      <Text>Hallo</Text>
      <Text>Hallo</Text>
      <Button
        title="Button"
        onPress={() => {
          return io.emit('message-from-client', 'hello from here');
        }}
      />
    </View>
  );
}
