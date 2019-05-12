import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NgxPermissionsGuard} from 'ngx-permissions';

import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';
import { AuthSignUpComponent } from '../auth/auth-sign-up/auth-sign-up.component';
import {ComentarioBlogListComponent} from '../comentario-blog/comentario-blog-list/comentario-blog-list.component';
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
import {UsuarioListComponent} from '../usuario/usuario-list/usuario-list.component';
import {UsuarioDetailComponent} from '../usuario/usuario-detail/usuario-detail.component';
import {UsuarioCreateComponent} from '../usuario/usuario-create/usuario-create.component';
import {CoordinadorListComponent} from '../coordinador/coordinador-list/coordinador-list.component';
import {CoordinadorDetailComponent} from '../coordinador/coordinador-detail/coordinador-detail.component';
import {CoordinadorCreateComponent} from '../coordinador/coordinadro-create/coordinador-create.component';
import {AdministradorListComponent} from '../administrador/administrador-list/administrador-list.component';
import {AdministradorDetailComponent} from '../administrador/administrador-detail/administrador-detail.component';
import {AdministradorCreateComponent} from '../administrador/administrador-create/administrador-create.component';
import {AnfitrionListComponent} from '../anfitrion/anfitrion-list/anfitrion-list.component';
import {AnfitrionDetailComponent} from '../anfitrion/anfitrion-detail/anfitrion-detail.component';
import {AnfitrionCreateComponent} from '../anfitrion/anfitrion-create/anfitrion-create.component';

const routes: Routes = [


    /**
      * Rutas de los comentarios junto con sus servicios.
      */
    {
        path: 'home',
        component: AuthLoginComponent
    }
    ,

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
        path: 'chats',
        children: [
            {
                path: 'list',
                component: ChatListComponent
            },
            {
                path: ':id',
                component: ChatDetailComponent
            },
            {
                path: 'add',
                component: ChatCreateComponent
            },
            {
                path:':id/edit',
                component: ChatEditComponent 
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
            ,
            {
                path: 'create',
                component: AdministradorCreateComponent,

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
            ,
            {
                path: 'create',
                component: AnfitrionCreateComponent,

            }
        ]
    }
    ,
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
            }
            ,
            {
                path: 'create',
                component: UsuarioCreateComponent,

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
