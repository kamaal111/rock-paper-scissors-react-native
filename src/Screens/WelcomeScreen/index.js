import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import socketIO from 'socket.io-client';

import UsernameForm from '../../components/UsernameForm';

import { setUser } from '../../actions/users';

import { baseUrl } from '../../../config';

function WelcomeScreen({ setUser: setUserAction }) {
  const io = socketIO(baseUrl);

  useEffect(() => {
    io.on('welcome-from-server', data => console.log(data));
  }, []);

  return (
    <>
      <UsernameForm io={io} setUser={setUserAction} />
    </>
  );
}

export default connect(
  null,
  { setUser },
)(WelcomeScreen);
