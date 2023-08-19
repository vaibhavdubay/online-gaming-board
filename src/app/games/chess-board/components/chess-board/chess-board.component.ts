import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { UnSubscribeComponent } from 'src/app/shared/components/unsubscribe.component';
import { ChessBoardService } from '../../service/chess-board.service';
import { ChessPiece, SelectedPiece } from '../../state/chessboard.model';

@Component({
  selector: 'app-chess-board',
  templateUrl: './chess-board.component.html',
  styleUrls: ['./chess-board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChessBoardComponent extends UnSubscribeComponent {
  protected chessboard: ChessPiece[][] = [];
  protected currentPlayer = 'white';
  protected selectedPiece?: SelectedPiece;
  protected deadPieces: { [k: string]: ChessPiece[] } = {
    white: [],
    black: [],
  };
  protected possibleMoves: string[] = [];
  protected gameOver = false;
  constructor(
    private cd: ChangeDetectorRef,
    private chessService: ChessBoardService
  ) {
    super();
    this.chessboard = chessService.initialize();
  }

  protected selectPiece(row: number, col: number, piece: ChessPiece): void {
    this.possibleMoves = this.chessService.handleCharacterMove(
      row,
      col,
      piece,
      this.chessboard
    );
    this.selectedPiece =
      this.selectedPiece?.row === row && this.selectedPiece.col === col
        ? undefined
        : { piece, row, col };
  }

  protected placeMove(row: number, col: number): void {
    if (
      this.selectedPiece?.piece &&
      this.selectedPiece.row >= 0 &&
      this.selectedPiece.col >= 0
    ) {
      this.chessboard[this.selectedPiece.row][this.selectedPiece.col] = {
        key: '',
        player: '',
      };
      const nextPlace = this.chessboard[row][col];
      if (nextPlace.id === 0) {
        this.gameOver = true;
        // const dialogRef = this.dialog.open(GameOverComponent, {
        //   data: { current: this.currentPlayer },
        //   minWidth: '350px',
        // });

        // dialogRef
        //   .afterClosed()
        //   .pipe(filter((r) => r === 'restart'))
        //   .subscribe((result) => {
        //     this.chessboard = this.chessService.initialize();
        //     this.currentPlayer = 'white';
        //     this.deadPieces = {
        //       white: [],
        //       black: [],
        //     };
        //     this.gameOver = false;
        //     this.possibleMoves = [];
        //     this.selectedPiece = undefined;
        //   });
      }
      if (nextPlace.id) this.deadPieces[nextPlace.player].push(nextPlace);
      this.chessboard[row][col] = this.selectedPiece.piece;
      this.possibleMoves = [];
      if (!this.gameOver) this.playerToggle();
      this.cd.markForCheck();
    }
    this.cd.markForCheck();
  }

  protected playerToggle = (): 'white' | 'black' =>
    (this.currentPlayer = this.currentPlayer === 'white' ? 'black' : 'white');
}
