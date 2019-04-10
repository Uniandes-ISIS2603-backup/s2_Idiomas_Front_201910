import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NgxPermissionsGuard} from 'ngx-permissions';

import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';
import { AuthSignUpComponent } from '../auth/auth-sign-up/auth-sign-up.component';
import {ComentarioBlogListComponent} from '../comentario-blog/comentario-blog-list/comentario-blog-list.component';
import {ComentarioGrupoInteresListComponent} from '../comentario-grupo-interes/comentario-grupo-interes-list/comentario-grupo-interes-list.component';
import {ComentarioBlogDetailComponent } from '../comentario-blog/comentario-blog-detail/comentario-blog-detail.component';
import { ActividadListComponent } from '../actividad/actividad-list/actividad-list.component';
import { ActividadDetailComponent } from '../actividad/actividad-detail/actividad-detail.component';
import { ActividadCreateComponent } from '../actividad/actividad-create/actividad-create.component';
import { ActividadEditComponent } from '../actividad/actividad-edit/actividad-edit.component';

const routes: Routes = [

     
    {
        path: 'comments',
        children: [
            {
                path: 'list',
                component: ComentarioBlogListComponent
            },
            {
                path: ':id',
                component: ComentarioBlogDetailComponent
            }
        ]
        
    },

    /**
     * Rutas para los componentes asociados con actividad
     */
    {
        path: 'actividades',
        children: [
            {
                path: 'list',
                component: ActividadListComponent
            },
            {
                path: ':id',
                component: ActividadDetailComponent
            },
            {
                path: 'add',
                component: ActividadCreateComponent
            },
            {
                path:':id/edit',
                component: ActividadEditComponent 
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
        redirectTo: 'home'
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
