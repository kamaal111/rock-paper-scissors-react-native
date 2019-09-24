import React, { useEffect } from 'react';
import socketIO from 'socket.io-client';

import UsernameForm from '../../components/UsernameForm';

import { baseUrl } from '../../../config';

export default function WelcomeScreen() {
  const io = socketIO(baseUrl);

  useEffect(() => {
    io.on('message-from-server', data => console.log('data', data));
  }, []);

  return (
    <>
      <UsernameForm io={io} />
    </>
  );
}
