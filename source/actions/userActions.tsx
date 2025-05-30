import { ActionCreatorWithPayload, createAction } from '@reduxjs/toolkit';
import * as Actions from './types';

//set User Loading
export const setUserLoading: ActionCreatorWithPayload<any, string> = createAction(
  Actions.SET_USER_LOADING,
);

//set Current User
export const setCurrentUser: ActionCreatorWithPayload<any, string> = createAction(
  Actions.SET_CURRENT_USER,
);
