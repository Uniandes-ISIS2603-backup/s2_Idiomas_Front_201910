import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { EditorialListComponent } from './editorial-list/editorial-list.component';

import { EditorialService } from './editorial.service';
import { FormsModule } from '@angular/forms';
import { EditorialDetailComponent } from './editorial-detail/editorial-detail.component';
import { GrupodeinteresCreateComponent } from './grupodeinteres-create/grupodeinteres-create.component';


@NgModule({
    imports: [       
        CommonModule,
        FormsModule,
        AppRoutingModule
    ],
    declarations: [EditorialListComponent, EditorialDetailComponent, GrupodeinteresCreateComponent],
    providers: [EditorialService],
    exports:[EditorialListComponent]
})
export class EditorialModule {}
