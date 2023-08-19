import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { FireBaseStoreService } from 'src/app/core/firebase/store.service';

@Injectable()
export class ChessboardEffects {
  constructor(
    private actions$: Actions,
    private FireBaseStoreService: FireBaseStoreService
  ) {}
}
