import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NgxPermissionsGuard} from 'ngx-permissions';

import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';
import { AuthSignUpComponent } from '../auth/auth-sign-up/auth-sign-up.component';
import {ComentarioBlogListComponent} from '../comentario-blog/comentario-blog-list/comentario-blog-list.component';
import {ComentarioGrupoInteresListComponent} from '../comentario-grupo-interes/comentario-grupo-interes-list/comentario-grupo-interes-list.component';
import {ComentarioBlogDetailComponent } from '../comentario-blog/comentario-blog-detail/comentario-blog-detail.component';
import {ComentarioCreateComponent } from '../comentario-blog/comentario-create/comentario-create.component';

const routes: Routes = [

     
    {
        path: 'comments',
        children: [
            {
                path: 'list',
                component: ComentarioBlogListComponent
            },
            {
                path: 'add',
                component: ComentarioCreateComponent,
            },
            {
                path: ':id',
                component: ComentarioBlogDetailComponent
            }
        ]
        
    },
    {
        path: 'home',
        component: AuthLoginComponent
    },
    {
        path: 'grupoInteresComments',
        children: [
            {
                path: 'list',
                component: ComentarioGrupoInteresListComponent
            }
        ]
        
    },
    {
        path: '**',
        redirectTo: 'home',
    }
    
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {

}
