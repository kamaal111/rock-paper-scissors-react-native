import React, { useEffect } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import LobbyForm from '../../components/LobbyForm';
import Lobby from '../../components/Lobby';

import { setNewLobby, getAllLobbies } from '../../actions/lobbies';

import styles from './styles';

function LobbyScreen({
  users,
  lobbies,
  setNewLobby: setNewLobbyAction,
  getAllLobbies: getAllLobbiesAction,
  navigation,
}) {
  const { io } = navigation.state.params;

  useEffect(() => {
    io.emit('all-lobbies-request-from-client');
    io.on('all-lobbies-from-server', data => getAllLobbiesAction(data));
    io.on('user-in-lobby-from-server', data => getAllLobbiesAction(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const lobbyStyles = {
    lobbyContainer: styles.lobbyContainer,
    lobbyText: styles.lobbyText,
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.lobbyFormContainer}>
        {users.activeUser === null ? (
          <Text>Loading.........</Text>
        ) : (
          <>
            <Text style={styles.welcomeText}>
              {`Welcome ${users.activeUser.name}`}
            </Text>
            <LobbyForm io={io} setNewLobby={setNewLobbyAction} />
          </>
        )}
      </View>
      <View style={styles.lobbyListContainer}>
        {lobbies.lobbyList.length < 1 ? (
          <View>
            <Text>No lobbies</Text>
            <Text>Please create one to play</Text>
          </View>
        ) : (
          lobbies.lobbyList
            .filter(lobby => lobby.users.length < 2)
            .map(({ id, name, users: lobbyUsers }) => (
              <Lobby
                key={id}
                io={io}
                id={id}
                name={name}
                amountOfUsers={lobbyUsers.length}
                styles={lobbyStyles}
                navigate={navigation.navigate}
              />
            ))
        )}
      </View>
    </ScrollView>
  );
}

const mapStateToProps = ({ users, lobbies }) => ({ users, lobbies });

export default connect(
  mapStateToProps,
  { setNewLobby, getAllLobbies },
)(LobbyScreen);
