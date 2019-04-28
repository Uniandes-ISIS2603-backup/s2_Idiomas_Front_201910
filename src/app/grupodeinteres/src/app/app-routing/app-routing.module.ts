import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GrupoDeInteresDetailComponent } from '../grupodeinteres/grupodeinteres-detail/grupodeinteres-detail.component';
import { GrupoDeInteresListComponent } from '../grupodeinteres/grupodeinteres-list/grupodeinteres-list.component';

const routes: Routes = [

  {
    path: 'editorials',
    children: [{
      path: 'list',
      component: EditorialListComponent
    },
    {
      path: ':id',
      component: GrupoDeInteresDetailComponent,
      outlet: 'detail'
    }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload'})
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule { }