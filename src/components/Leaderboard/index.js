import React from 'react';
import { View, Button, Text } from 'react-native';

export default function Leaderboard({ styles, navigate, score, allUsers }) {
  return (
    <View style={styles.leaderBoardContainer}>
      <Button
        title="Press Here Go Back To Lobby"
        onPress={() => navigate('Lobby')}
        color="#ffffff"
      />
      <Text style={styles.lossOrWinAndTitleText}>
        {score === '5' ? '🎊 You Won 🎊' : '😭 You Lost 😭'}
      </Text>

      <Text style={styles.lossOrWinAndTitleText}>Leaderboard</Text>
      {allUsers === null ? (
        <Text>loading...</Text>
      ) : (
        <>
          {allUsers.map(user => (
            <View key={user.id} style={styles.leaderBoardTextContainer}>
              <Text style={styles.leaderBoardText}>{user.name}</Text>
              <Text style={styles.leaderBoardText}>
                {`score: ${user.score}`}
              </Text>
            </View>
          ))}
        </>
      )}
    </View>
  );
}
