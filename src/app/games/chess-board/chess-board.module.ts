import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChessBoardRoutingModule } from './chess-board-routing.module';
import { ChessBoardComponent } from './components/chess-board/chess-board.component';
import { StoreModule } from '@ngrx/store';
import * as fromChessboard from './state/chessboard.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ChessboardEffects } from './state/chessboard.effects';
import { ChessBoardService } from './service/chess-board.service';
import { ChessBoardStoreService } from './service/chess-board-store.service';

@NgModule({
  declarations: [ChessBoardComponent],
  imports: [
    CommonModule,
    ChessBoardRoutingModule,
    StoreModule.forFeature(
      fromChessboard.chessboardsFeatureKey,
      fromChessboard.chessboardsFeature
    ),
    EffectsModule.forFeature([ChessboardEffects]),
  ],
  providers: [ChessBoardService, ChessBoardStoreService],
})
export class ChessBoardModule {}
