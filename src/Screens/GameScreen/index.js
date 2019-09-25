import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

function GameScreen({ navigation }) {
  const { io, id } = navigation.state.params;

  return (
    <View>
      <Text>game</Text>
    </View>
  );
}

// const mapStateToProps = ({ users, lobbies }) => ({ users, lobbies });

export default connect()(GameScreen);
