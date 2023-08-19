import { Component } from '@angular/core';
import { UnSubscribeComponent } from 'src/app/shared/components/unsubscribe.component';

@Component({
  selector: 'app-chess-board',
  templateUrl: './chess-board.component.html',
  styleUrls: ['./chess-board.component.scss']
})
export class ChessBoardComponent extends UnSubscribeComponent {
  constructor(){
    super();
  }
}
