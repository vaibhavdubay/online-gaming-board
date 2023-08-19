import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticateRoutingModule } from './authenticate-routing.module';
import * as fromAuthenticate from './state/authenticate.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthenticateEffects } from './state/authenticate.effects';
import { AuthenticateStoreService } from './service/authenticate-store.service';
import { AuthenticateService } from './service/authenticate.service';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AuthenticateRoutingModule,
    StoreModule.forFeature(
      fromAuthenticate.authenticateFeatureKey,
      fromAuthenticate.authenticatesFeature
    ),
    EffectsModule.forFeature([AuthenticateEffects]),
  ],
  providers: [AuthenticateService, AuthenticateStoreService],
})
export class AuthenticateModule {}
