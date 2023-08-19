import { createActionGroup } from '@ngrx/store';

export const authenticateActions = createActionGroup({
  source: 'Authenticate',
  events: {},
});
