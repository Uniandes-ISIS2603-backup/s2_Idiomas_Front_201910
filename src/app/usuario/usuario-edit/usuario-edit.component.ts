import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {Usuario} from '../usuario'
import {UsuarioService} from '../usuario.service'
import { ToastrService } from 'ngx-toastr';
import {UsuarioDetail} from '../usuario-detail';
import {ActivatedRoute , Params} from '@angular/router';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.css']
})
export class UsuarioEditComponent implements OnInit {

  constructor(private usuarioService : UsuarioService ,
        private toastrService: ToastrService ,private route: ActivatedRoute
) { }

  usuarios : Usuario[];
  public usuario : UsuarioDetail;
   /**
  * The usuario's id retrieved from the address
  */
  @Input() usuario_id: number;

  loader: any;
  
   /**
    * The output which tells the parent component
    * that the user no longer wants to create an author
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user created a new author
    */
    @Output() create = new EventEmitter();

  

  
    /**
    * Creates an usuario
    */
    editUsuario(): void {
       
        
        var usuario_editado: Usuario = {
            id: this.usuario.id,
            nombre: this.usuario.nombre,
            contrasenia : this.usuario.contrasenia,
            
        };
        this.usuarioService.updateUsuario(usuario_editado)
            .subscribe(() => {
                this.create.emit();
                this.toastrService.success("The author was updated", "Author update");
            }, err => {
                this.toastrService.error(err, "Error");
            });
    }
    
    /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to create an user
    */
    cancelCreation(): void {
        this.cancel.emit();
    }
    
   onLoad(params) {

    this.usuario_id = parseInt(params['id']);
    console.log(" en update " + this.usuario_id);
    this.usuarioService.getUsuarioDetail(this.usuario_id)
      .subscribe(o => {
        this.usuario = o});  
  }
  ngOnInit() {
    this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
  }

  ngOnDestroy() {
    this.loader.unsubscribe();
  }

}