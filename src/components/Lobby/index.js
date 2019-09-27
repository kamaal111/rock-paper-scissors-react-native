import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export default function Lobby({
  io,
  id,
  name,
  amountOfUsers,
  navigate,
  styles,
}) {
  return (
    <TouchableOpacity
      onPressIn={() => navigate('Game', { io, id })}
      style={styles.lobbyContainer}
    >
      <Text style={styles.lobbyText}>{name}</Text>
      <Text style={styles.lobbyText}>
        {`Players playing ${amountOfUsers}/2`}
      </Text>
    </TouchableOpacity>
  );
}
