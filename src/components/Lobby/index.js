import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

const Viewer = ({ children, io, id, amountOfUsers, navigate, styles }) =>
  amountOfUsers < 2 ? (
    <TouchableOpacity
      onPressIn={() => navigate('Game', { io, id })}
      style={styles}
    >
      {children}
    </TouchableOpacity>
  ) : (
    <View style={styles}>{children}</View>
  );

export default function Lobby({
  io,
  id,
  name,
  score,
  amountOfUsers,
  navigate,
  styles,
}) {
  return (
    <Viewer
      io={io}
      id={id}
      amountOfUsers={amountOfUsers}
      navigate={navigate}
      styles={styles.lobbyContainer}
    >
      <Text style={styles.lobbyText}>{name}</Text>
      <Text style={styles.lobbyText}>{score}</Text>
      <Text style={styles.lobbyText}>
        {`Players playing ${amountOfUsers}/2`}
      </Text>
    </Viewer>
  );
}
