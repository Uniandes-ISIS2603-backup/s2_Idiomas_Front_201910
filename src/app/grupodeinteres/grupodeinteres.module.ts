import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { GrupoDeInteresListComponent } from './grupodeinteres-list/grupodeinteres-list.component';

import { GrupoDeInteresService } from './grupodeinteres.service';
import { FormsModule } from '@angular/forms';
import { GrupoDeInteresDetailComponent } from './grupodeinteres-detail/grupodeinteres-detail.component';
import { GrupodeinteresCreateComponent } from './grupodeinteres-create/grupodeinteres-create.component';


@NgModule({
    imports: [       
        CommonModule,
        FormsModule,
        AppRoutingModule
    ],
    declarations: [GrupoDeInteresListComponent, GrupoDeInteresDetailComponent, GrupodeinteresCreateComponent],
    providers: [GrupoDeInteresService],
    exports:[GrupoDeInteresListComponent , GrupoDeInteresDetailComponent , GrupodeinteresCreateComponent]
})
export class GrupoDeInteresModule {}
