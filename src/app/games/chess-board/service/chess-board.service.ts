import { Injectable } from '@angular/core';
import { chessPieces } from '../constants/chess-board.constant';
import { ChessPiece } from '../state/chessboard.model';

@Injectable()
export class ChessBoardService {
  private chessStandard = [4, 3, 2, 1, 0, 2, 3, 4];
  private specialMoves: {
    [key: number]: (
      row: number,
      col: number,
      piece: ChessPiece,
      board: ChessPiece[][]
    ) => string[];
  } = {
    0: this.kingMove,
    1: this.queenMove,
    2: this.bishopMove,
    3: this.knightMove,
    4: this.rookMove,
    5: this.pawnMove,
  };

  public initialize(): ChessPiece[][] {
    const whitePieces = chessPieces.white;
    const blackPieces = chessPieces.black;

    const chessBoard = Array.from({ length: 8 }, (_, row) =>
      Array.from({ length: 8 }, (_, col): ChessPiece => {
        const piece =
          row === 1
            ? whitePieces.find((piece) => piece.id === 5)
            : row === 6
            ? blackPieces.find((piece) => piece.id === 5)
            : (row === 0 ? whitePieces : row === 7 ? blackPieces : []).find(
                (piece) => piece.id === this.chessStandard[col]
              );
        return { key: '', player: '', ...piece };
      })
    );

    return chessBoard;
  }

  public handleCharacterMove(
    row: number,
    col: number,
    piece: ChessPiece,
    board: ChessPiece[][]
  ): string[] {
    const func = this.specialMoves[piece.id as number];
    const moves = func(row, col, piece, board);
    return moves;
  }
  private rookMove(
    row: number,
    col: number,
    piece: ChessPiece,
    board: ChessPiece[][]
  ): string[] {
    return [];
  }
  private knightMove(
    row: number,
    col: number,
    piece: ChessPiece,
    board: ChessPiece[][]
  ): string[] {
    return [];
  }
  private bishopMove(
    row: number,
    col: number,
    piece: ChessPiece,
    board: ChessPiece[][]
  ): string[] {
    return [];
  }
  private queenMove(
    row: number,
    col: number,
    piece: ChessPiece,
    board: ChessPiece[][]
  ): string[] {
    return [];
  }
  private kingMove(
    row: number,
    col: number,
    piece: ChessPiece,
    board: ChessPiece[][]
  ): string[] {
    return [];
  }

  private pawnMove(
    row: number,
    col: number,
    piece: ChessPiece,
    board: ChessPiece[][]
  ): string[] {
    const moves = [];
    const calculateNextRow = (row: number, player: string): number => {
      return player === 'white' ? row + 1 : row - 1;
    };

    const isSquareOccupied = (square: ChessPiece | undefined): boolean => {
      return square?.id !== undefined;
    };
    console.warn(row, piece);
    const nextRow = calculateNextRow(row, piece.player);
    const leftDiagonalSquare = board[nextRow][col - 1];
    const rightDiagonalSquare = board[nextRow][col + 1];

    if (!isSquareOccupied(board[nextRow][col])) {
      moves.push(nextRow.toString() + col);

      if (
        (piece.player === 'black' && row === 6) ||
        (piece.player === 'white' && row === 1)
      ) {
        const secondRow = nextRow > row ? nextRow + 1 : nextRow - 1;
        moves.push(secondRow.toString() + col);
      }
    }

    if (isSquareOccupied(rightDiagonalSquare)) {
      moves.push(nextRow.toString() + (col + 1));
    }

    if (isSquareOccupied(leftDiagonalSquare)) {
      moves.push(nextRow.toString() + (col - 1));
    }

    return moves;
  }
}
