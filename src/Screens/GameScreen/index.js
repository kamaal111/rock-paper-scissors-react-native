import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

function GameScreen({ users, navigation }) {
  const { io, id } = navigation.state.params;

  useEffect(() => {
    io.emit('user-in-lobby-from-client', {
      lobbyId: id,
      userId: users.activeUser.id,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View>
      <Text>game</Text>
      <Text>{users.activeUser.name}</Text>
    </View>
  );
}

const mapStateToProps = ({ users }) => ({ users });

export default connect(mapStateToProps)(GameScreen);
