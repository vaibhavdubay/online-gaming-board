import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'game',
    children: [
      {
        path: 'chess-board',
        loadChildren: () =>
          import('./games/chess-board/chess-board.module').then(
            ({ ChessBoardModule }) => ChessBoardModule
          ),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
