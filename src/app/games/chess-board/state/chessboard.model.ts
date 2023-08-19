export interface Chessboard {
  id: string;
}

export interface ChessPiece {
  key: string;
  player: 'white' | 'black' | '' | string;
  id?: number;
}
export interface SelectedPiece {
  piece: ChessPiece;
  row: number;
  col: number;
}
