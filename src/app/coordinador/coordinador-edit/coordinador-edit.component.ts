import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {Coordinador} from '../coordinador'
import {CoordinadorService} from '../coordinador.service'
import { ToastrService } from 'ngx-toastr';
import {CoordinadorDetail} from '../coordinador-detail';
import {ActivatedRoute , Params} from '@angular/router';

@Component({
  selector: 'app-coordinador-edit',
  templateUrl: './coordinador-edit.component.html',
  styleUrls: ['./coordinador-edit.component.css']
})
export class CoordinadorEditComponent implements OnInit {

  constructor(private coordinadorService : CoordinadorService ,
        private toastrService: ToastrService ,private route: ActivatedRoute
) { }

  coordinadores : Coordinador[];
  public coordinador : CoordinadorDetail;
   /**
  * The coordinador's id retrieved from the address
  */
  @Input() coordinador_id: number;

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
    * Creates an coordinador
    */
    editCoordinador(): void {
       
        
        var coordinador_editado: Coordinador = {
            id: this.coordinador.id,
            nombre: this.coordinador.nombre,
            contrasenia : this.coordinador.contrasenia,
            
        };
        this.coordinadorService.updateCoordinador(coordinador_editado)
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

    this.coordinador_id = parseInt(params['id']);
    console.log(" en update " + this.coordinador_id);
    this.coordinadorService.getCoordinadorDetail(this.coordinador_id)
      .subscribe(o => {
        this.coordinador = o});  
  }
  ngOnInit() {
    this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
  }

  ngOnDestroy() {
    this.loader.unsubscribe();
  }

}