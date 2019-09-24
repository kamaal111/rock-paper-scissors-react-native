import React, { useEffect } from 'react';
import { View, Button } from 'react-native';
import socketIO from 'socket.io-client';

import { baseUrl } from '../../../config';

export default function WelcomeScreen() {
  const io = socketIO(baseUrl);

  useEffect(() => {
    io.on('message-from-server', data => console.log('data', data));
  }, []);

  return (
    <View>
      <Button
        title="Button"
        onPress={() => io.emit('message-from-client', 'hello from here')}
      />
    </View>
  );
}
