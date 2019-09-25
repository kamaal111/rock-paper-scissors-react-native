import React, { useEffect } from 'react';
import { Text, View, Image } from 'react-native';
import { connect } from 'react-redux';

import styles from './styles';

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
    <View style={styles.gameContainer}>
      <Text style={styles.gameTitle}>🔥ROCK PAPER SCISSORS🔥</Text>
      <Text style={styles.activeUserText}>{users.activeUser.name}</Text>
      <Image
        source={require('../../assets/scissors.png')}
        style={{ height: 20, width: 20 }}
      />
    </View>
  );
}

const mapStateToProps = ({ users }) => ({ users });

export default connect(mapStateToProps)(GameScreen);
