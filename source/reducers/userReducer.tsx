import { combineReducers } from 'redux';
import * as Actions from '../actions/types';
import { createReducer } from '../utils/reduxHelpers';

const setCurrentUserReducer = createReducer({
  initialState: null,
  actionType: Actions.SET_CURRENT_USER,
});

export default combineReducers({
  currentUser: setCurrentUserReducer,
});
