import { Action, createReducer } from '@ngrx/store';
import { Chessboard } from './chessboard.model';

export const chessboardsFeatureKey = 'chessboards';

export const initialState: Chessboard = {
  id:""
}

export const reducer = createReducer(
  initialState,
);

export const chessboardsFeature = (
  state: Chessboard | undefined,
  action: Action
): Chessboard => {
  return reducer(state, action);
};