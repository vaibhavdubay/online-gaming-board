import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { FireBaseAuthService } from 'src/app/core/firebase/auth.service';
import { FireBaseStoreService } from 'src/app/core/firebase/store.service';

@Injectable()
export class AuthenticateEffects {
  constructor(
    private actions$: Actions,
    private FireBaseStoreService: FireBaseStoreService,
    private FireBaseAuthService: FireBaseAuthService
  ) {}
}
