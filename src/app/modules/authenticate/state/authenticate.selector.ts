import { createFeatureSelector, createSelector } from '@ngrx/store';
import { authenticateFeatureKey } from './authenticate.reducer';
import { AuthProfile } from './authenticate.model';

const selectMainSelector = createFeatureSelector<AuthProfile>(
  authenticateFeatureKey
);

export const selectId = createSelector(selectMainSelector, (state) => state.id);
