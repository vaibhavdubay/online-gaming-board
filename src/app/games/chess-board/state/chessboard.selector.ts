import { createFeatureSelector, createSelector } from '@ngrx/store';
import { chessboardsFeatureKey } from './chessboard.reducer';
import { Chessboard } from './chessboard.model';

const selectMainSelector = createFeatureSelector<Chessboard>(
  chessboardsFeatureKey
);

export const selectId = createSelector(selectMainSelector, (state) => state.id);
