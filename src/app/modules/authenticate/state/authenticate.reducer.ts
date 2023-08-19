import { Action, createReducer } from '@ngrx/store';
import { AuthProfile } from './authenticate.model';

export const authenticateFeatureKey = 'authenticate';

export const initialState: AuthProfile = {
  id: '',
};

export const reducer = createReducer(initialState);

export const authenticatesFeature = (
  state: AuthProfile | undefined,
  action: Action
): AuthProfile => {
  return reducer(state, action);
};
