/* eslint-disable react/no-array-index-key */
import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';

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

export default function Game({
  styles,
  score,
  activeUser,
  turn,
  assets,
  io,
  setTurn,
  lobbyId,
  setChoice,
  assetChoice,
  choice,
  users,
  opponentsChoice,
  choiceToIndex,
  opponent,
}) {
  return (
    <View style={styles.gameContainer}>
      <Text style={styles.gameTitle}>🔥ROCK PAPER SCISSORS🔥</Text>
      <Text style={styles.scoreText}>{score}</Text>
      <Text style={styles.activeUserText}>{activeUser.name}</Text>
      {turn === false ? (
        <></>
      ) : (
        <View style={styles.assetImagesContainer}>
          {assets.map((asset, i) => (
            <ImageView
              key={i}
              io={io}
              turn={turn}
              setTurn={setTurn}
              userId={activeUser.id}
              lobbyId={lobbyId}
              setChoice={setChoice}
              assetId={i}
              chosenAsset={assetChoice(i)}
            >
              <Image source={asset} style={styles.assetImage} />
            </ImageView>
          ))}
        </View>
      )}
      {choice === null ? (
        <></>
      ) : (
        <Image source={assets[choice]} style={styles.assetImage} />
      )}
      {users.length < 2 ? (
        <></>
      ) : (
        <>
          {opponentsChoice === null ? (
            <></>
          ) : (
            <Image
              source={assets[choiceToIndex(opponentsChoice)]}
              style={styles.assetImage}
            />
          )}
          <Text style={styles.activeUserText}>{opponent.name}</Text>
        </>
      )}
    </View>
  );
}
