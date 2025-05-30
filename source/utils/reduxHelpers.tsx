import { PayloadAction, createReducer as createReducerOrig } from '@reduxjs/toolkit';
interface CreateReducer {
  initialState: any;
  actionType: any;
}
export const createReducer = ({ initialState, actionType }: CreateReducer) => {
  return createReducerOrig(initialState, builder => {
    builder.addCase(actionType, (state, action: PayloadAction<any>) => action.payload);
  });
};
