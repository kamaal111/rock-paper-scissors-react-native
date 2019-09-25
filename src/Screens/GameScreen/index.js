/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import styles from './styles';

function ImageView({
  io,
  lobbyId,
  userId,
  children,
  turn,
  setTurn,
  setChoice,
  chosenAsset,
  assetId,
}) {
  return turn ? (
    <TouchableOpacity
      onPressIn={() => {
        setTurn(false);
        setChoice(assetId);
        return io.emit('user-in-game-choice-from-client', {
          userId,
          lobbyId,
          choice: chosenAsset,
        });
      }}
    >
      {children}
    </TouchableOpacity>
  ) : (
    <View>{children}</View>
  );
}

function GameScreen({ users, lobbies, navigation }) {
  const [turn, setTurn] = useState(true);
  const [choice, setChoice] = useState(null);

  const { io, id: lobbyId } = navigation.state.params;

  useEffect(() => {
    io.emit('user-in-lobby-from-client', {
      lobbyId,
      userId: users.activeUser.id,
    });
    io.on(`user-in-game-${lobbyId}-choice-from-server`, data =>
      console.log('data', data),
    );
    io.on(`user-in-game-${lobbyId}-winner-from-server`, data =>
      console.log('data', data),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const currentLobby = lobbies.lobbyList.find(lobby => lobby.id === lobbyId);
  const opponent =
    currentLobby.users.length < 2
      ? null
      : currentLobby.users.find(user => user.id !== users.activeUser.id);

  const assets = [
    require('../../assets/rock.png'),
    require('../../assets/paper.png'),
    require('../../assets/scissors.png'),
  ];

  const assetChoice = index => {
    if (index === 0) return 'rock';
    if (index === 1) return 'paper';
    return 'scissors';
  };

  return (
    <View style={styles.screenContainer}>
      <View style={styles.gameContainer}>
        <Text style={styles.gameTitle}>🔥ROCK PAPER SCISSORS🔥</Text>
        <Text style={styles.scoreText}>{currentLobby.score}</Text>
        <Text style={styles.activeUserText}>{users.activeUser.name}</Text>
        <View style={styles.assetImagesContainer}>
          {assets.map((asset, i) => (
            <ImageView
              key={i}
              io={io}
              turn={turn}
              setTurn={setTurn}
              userId={users.activeUser.id}
              lobbyId={lobbyId}
              setChoice={setChoice}
              assetId={i}
              chosenAsset={assetChoice(i)}
            >
              <Image source={asset} style={styles.assetImage} />
            </ImageView>
          ))}
        </View>
        {choice === null ? (
          <></>
        ) : (
          <Image source={assets[choice]} style={styles.assetImage} />
        )}
        {currentLobby.users.length < 2 ? (
          <></>
        ) : (
          <>
            <View style={styles.assetImagesContainer}>
              {assets.map((asset, i) => (
                <Image key={i} source={asset} style={styles.assetImage} />
              ))}
            </View>
            <Text style={styles.activeUserText}>{opponent.name}</Text>
          </>
        )}
      </View>
    </View>
  );
}

const mapStateToProps = ({ users, lobbies }) => ({ users, lobbies });

export default connect(mapStateToProps)(GameScreen);
