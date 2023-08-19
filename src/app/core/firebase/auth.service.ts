import { Injectable } from '@angular/core';
import { Auth, User, user } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FireBaseAuthService {
  public user$: Observable<User | null>;
  constructor(private auth: Auth) {
    this.user$ = user(auth);
  }
}
