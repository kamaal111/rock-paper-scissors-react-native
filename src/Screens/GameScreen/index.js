/* eslint-disable react/no-array-index-key */

import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import Leaderboard from '../../components/Leaderboard';
import Game from '../../components/Game';

import { getAllUsers } from '../../actions/users';

import styles from './styles';

function GameScreen({
  users,
  lobbies,
  getAllUsers: getAllUsersAction,
  navigation,
}) {
  const [turn, setTurn] = useState(true);
  const [choice, setChoice] = useState(null);
  const [opponentsChoice, setOpponentsChoice] = useState(null);
  const [score, setScore] = useState('0-0');

  const { io, id: lobbyId } = navigation.state.params;

  const winningCondition = choiceUser => {
    if (choiceUser === 'scissors') return 'paper';
    if (choiceUser === 'paper') return 'rock';
    if (choiceUser === 'rock') return 'scissors';
    return null;
  };

  const assetChoice = index => {
    if (index === 0) return 'rock';
    if (index === 1) return 'paper';
    if (index === 2) return 'scissors';
    return null;
  };

  const choiceToIndex = userChoice => {
    if (userChoice === 'rock') return 0;
    if (userChoice === 'paper') return 1;
    if (userChoice === 'scissors') return 2;
    return null;
  };

  useEffect(() => {
    io.emit('user-in-lobby-from-client', {
      lobbyId,
      userId: users.activeUser.id,
    });

    io.on(`user-in-game-${lobbyId}-choice-from-server`, () =>
      setOpponentsChoice(null),
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    io.on(`user-in-game-${lobbyId}-winner-from-server`, data => {
      if (data.winner === null) return null;
      if (data.winner === 'DRAW') {
        setTurn(true);
        return setOpponentsChoice(assetChoice(choice));
      }

      const [, winningChoice] = data.winner.split('-');

      const { incremented, other } = data.doc;

      if (assetChoice(choice) === winningChoice) {
        if (other.id === users.activeUser.id) {
          setScore(`${other.lobbyScore}-${incremented.lobbyScore}`);
        } else {
          setScore(`${incremented.lobbyScore}-${other.lobbyScore}`);
        }
        setOpponentsChoice(winningCondition(assetChoice(choice)));
        return setTimeout(() => {
          setTurn(true);
        }, 1500);
      }

      if (other.id === users.activeUser.id) {
        setScore(`${other.lobbyScore}-${incremented.lobbyScore}`);
      } else {
        setScore(`${incremented.lobbyScore}-${other.lobbyScore}`);
      }

      setOpponentsChoice(winningChoice);
      return setTimeout(() => {
        setTurn(true);
      }, 1500);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [choice]);

  useEffect(() => {
    if (score.split('-').some(point => Number(point) > 4)) {
      io.emit('get-all-users-from-client', 'give them to me');
      io.on('get-all-users-from-server', data => getAllUsersAction(data.doc));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [score]);

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

  const leaderBoardStyles = {
    leaderBoardContainer: styles.leaderBoardContainer,
    lossOrWinAndTitleText: styles.lossOrWinAndTitleText,
    leaderBoardTextContainer: styles.leaderBoardTextContainer,
    leaderBoardText: styles.leaderBoardText,
  };

  const gameStyle = {
    gameContainer: styles.gameContainer,
    gameTitle: styles.gameTitle,
    scoreText: styles.scoreText,
    activeUserText: styles.activeUserText,
    assetImagesContainer: styles.assetImagesContainer,
    assetImage: styles.assetImage,
  };

  return (
    <View style={styles.screenContainer}>
      {score.split('-').some(point => Number(point) > 4) ? (
        <Leaderboard
          styles={leaderBoardStyles}
          navigate={navigation.navigate}
          score={score.split('-')[0]}
          allUsers={users.allUsers}
        />
      ) : (
        <Game
          styles={gameStyle}
          score={score}
          activeUser={users.activeUser}
          turn={turn}
          assets={assets}
          io={io}
          setTurn={setTurn}
          lobbyId={lobbyId}
          setChoice={setChoice}
          assetChoice={assetChoice}
          choice={choice}
          users={currentLobby.users}
          opponentsChoice={opponentsChoice}
          choiceToIndex={choiceToIndex}
          opponent={opponent}
        />
      )}
    </View>
  );
}

const mapStateToProps = ({ users, lobbies }) => ({ users, lobbies });

export default connect(
  mapStateToProps,
  { getAllUsers },
)(GameScreen);
