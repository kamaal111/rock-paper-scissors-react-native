import React, { useEffect, useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import styles from './styles';

function ImageView({ children, turn, assetId }) {
  return turn ? (
    <TouchableOpacity onPressIn={() => console.log('assetId', assetId)}>
      {children}
    </TouchableOpacity>
  ) : (
    <View>{children}</View>
  );
}

function GameScreen({ users, navigation }) {
  const [turn] = useState(true);

  const { io, id } = navigation.state.params;

  useEffect(() => {
    io.emit('user-in-lobby-from-client', {
      lobbyId: id,
      userId: users.activeUser.id,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const assets = [
    require('../../assets/rock.png'),
    require('../../assets/paper.png'),
    require('../../assets/scissors.png'),
  ];

  return (
    <View style={styles.screenContainer}>
      <View style={styles.gameContainer}>
        <Text style={styles.gameTitle}>🔥ROCK PAPER SCISSORS🔥</Text>
        <Text style={styles.activeUserText}>{users.activeUser.name}</Text>
        <View style={styles.assetImagesContainer}>
          {assets.map((asset, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <ImageView key={i} turn={turn} assetId={i}>
              <Image source={asset} style={styles.assetImage} />
            </ImageView>
          ))}
        </View>
      </View>
    </View>
  );
}

const mapStateToProps = ({ users }) => ({ users });

export default connect(mapStateToProps)(GameScreen);
