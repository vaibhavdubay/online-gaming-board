import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChessBoardComponent } from './components/chess-board/chess-board.component';

const routes: Routes = [
  {
    path: '',
    component: ChessBoardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChessBoardRoutingModule {}
