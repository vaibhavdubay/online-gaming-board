import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectId } from '../state/chessboard.selector';

@Injectable()
export class ChessBoardStoreService {
  constructor(private readonly store: Store) {}

  public getId(): Observable<string> {
    return this.store.select(selectId);
  }

  public dispatch(action: Action): void {
    this.store.dispatch(action);
  }
}
