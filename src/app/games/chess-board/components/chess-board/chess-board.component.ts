import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { UnSubscribeComponent } from 'src/app/shared/components/unsubscribe.component';
import { selectId } from '../../state/chessboard.selector';

@Component({
  selector: 'app-chess-board',
  templateUrl: './chess-board.component.html',
  styleUrls: ['./chess-board.component.scss'],
})
export class ChessBoardComponent extends UnSubscribeComponent {
  constructor(store: Store) {
    super();
    store.select(selectId).subscribe(console.warn);
  }
}
