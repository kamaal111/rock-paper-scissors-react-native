import { combineReducers } from 'redux';

import users from './users';
import lobbies from './lobbies';

export default combineReducers({ users, lobbies });
