import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NgxPermissionsGuard} from 'ngx-permissions';

import {AuthLoginComponent} from '../auth/auth-login/auth-login.component';
import {AuthSignUpComponent} from '../auth/auth-sign-up/auth-sign-up.component';
import {ComentarioBlogListComponent} from '../comentario-blog/comentario-blog-list/comentario-blog-list.component';
import {ComentarioGrupoInteresListComponent} from '../comentario-grupo-interes/comentario-grupo-interes-list/comentario-grupo-interes-list.component';
import {ComentarioBlogDetailComponent} from '../comentario-blog/comentario-blog-detail/comentario-blog-detail.component';
import {UsuarioListComponent} from '../usuario/usuario-list/usuario-list.component';
import {UsuarioDetailComponent} from '../usuario/usuario-detail/usuario-detail.component';
import {UsuarioCreateComponent} from '../usuario/usuario-create/usuario-create.component';
import {AdministradorListComponent} from '../administrador/administrador-list/administrador-list.component';
import {AdministradorDetailComponent} from '../administrador/administrador-detail/administrador-detail.component';
import {CoordinadorListComponent} from '../coordinador/coordinador-list/coordinador-list.component';
import {CoordinadorDetailComponent} from '../coordinador/coordinador-detail/coordinador-detail.component';
import {AnfitrionListComponent} from '../anfitrion/anfitrion-list/anfitrion-list.component';
import {AnfitrionDetailComponent} from '../anfitrion/anfitrion-detail/anfitrion-detail.component';
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
        path: 'usuarios',
        children: [
            {
                path: 'list',
                component: UsuarioListComponent
            },
            {
                path: ':id',
                component: UsuarioDetailComponent,
                outlet: 'detail'
            },
            {
                path: 'create',
                component: UsuarioCreateComponent,
                
            }
        ]
    },
     {
        path: 'coordinadores',
        children: [
            {
                path: 'list',
                component: CoordinadorListComponent
            },
            {
                path: ':id',
                component: CoordinadorDetailComponent,
                outlet: 'detail'
            }
        ]
        
    }
    ,
    {
        path: 'administradores',
        children: [
            {
                path: 'list',
                component: AdministradorListComponent
            },
            {
                path: ':id',
                component: AdministradorDetailComponent,
                outlet: 'detail'
            }
        ]
    }
    ,
    {
        path: 'anfitriones',
        children: [
            {
                path: 'list',
                component: AnfitrionListComponent
            },
            {
                path: ':id',
                component: AnfitrionDetailComponent,
                outlet: 'detail'
            }
        ]
    }
    ,
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
