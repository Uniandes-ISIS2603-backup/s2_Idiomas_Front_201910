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
import { EncuentroListComponent } from '../encuentro/encuentro-list/encuentro-list.component';
import { EncuentroDetailComponent } from '../encuentro/encuentro-detail/encuentro-detail.component';
import { EncuentroCreateComponent } from '../encuentro/encuentro-create/encuentro-create.component';
import { EncuentroEditComponent } from '../encuentro/encuentro-edit/encuentro-edit.component';
import { EstadiaListComponent } from '../estadia/estadia-list/estadia-list.component';
import { EstadiaDetailComponent } from '../estadia/estadia-detail/estadia-detail.component';
import { EstadiaCreateComponent } from '../estadia/estadia-create/estadia-create.component';
import { EstadiaEditComponent } from '../estadia/estadia-edit/estadia-edit.component';
import { OtroListComponent } from '../otro/otro-list/otro-list.component';
import { OtroDetailComponent } from '../otro/otro-detail/otro-detail.component';
import { OtroCreateComponent } from '../otro/otro-create/otro-create.component';
import { OtroEditComponent } from '../otro/otro-edit/otro-edit.component';
import { ChatListComponent } from '../chat/chat-list/chat-list.component';
import { ChatDetailComponent } from '../chat/chat-detail/chat-detail.component';
import { ChatCreateComponent } from '../chat/chat-create/chat-create.component';
import { ChatEditComponent } from '../chat/chat-edit/chat-edit.component';
import {ComentarioCreateComponent } from '../comentario-blog/comentario-create/comentario-create.component';
import {ComentarioEditComponent } from '../comentario-blog/comentario-edit/comentario-edit.component';

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
            },
            {
                path: ':id/edit',
                component: ComentarioEditComponent,
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
        path: 'encuentros',
        children: [
            {
                path: 'list',
                component: EncuentroListComponent
            },
            {
                path: ':id',
                component: EncuentroDetailComponent
            },
            {
                path: 'add',
                component: EncuentroCreateComponent
            },
            {
                path:':id/edit',
                component: EncuentroEditComponent 
            }
        ]
    },
    {
        path: 'estadias',
        children: [
            {
                path: 'list',
                component: EstadiaListComponent
            },
            {
                path: ':id',
                component: EstadiaDetailComponent
            },
            {
                path: 'add',
                component: EstadiaCreateComponent
            },
            {
                path:':id/edit',
                component: EstadiaEditComponent 
            }
        ]
    },
    {
        path: 'otros',
        children: [
            {
                path: 'list',
                component: OtroListComponent
            },
            {
                path: ':id',
                component: OtroDetailComponent
            },
            {
                path: 'add',
                component: OtroCreateComponent
            },
            {
                path:':id/edit',
                component: OtroEditComponent 
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
