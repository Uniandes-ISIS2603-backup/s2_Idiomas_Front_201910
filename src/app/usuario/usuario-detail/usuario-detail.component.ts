import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario';
import { UsuarioDetail } from '../usuario-detail';


@Component({
  selector: 'app-usuario-detail',
  templateUrl: './usuario-detail.component.html',
  styleUrls: ['./usuario-detail.component.css']
})
export class UsuarioDetailComponent implements OnInit {

  constructor( private usuarioService: UsuarioService,
    private route: ActivatedRoute) { }
    
 /**
  * The usuario whose details we want to show
  */
  usuarioDetail: UsuarioDetail;
  actividades : number[];
  grupos: number[];



  /**
  * The usuario's id retrieved from the address
  */
  @Input() usuario_id: number;

  loader: any;
  /**
  * The method which retrieves the books of an usuario
  */
  getUsuarioDetail(): void {

    this.usuarioService.getUsuarioDetail(this.usuario_id)
      .subscribe(o => {
        this.usuarioDetail = o;
        this.actividades = o.actividades;
        this.grupos = o.grupos;
      });
  }

  onLoad(params) {

    this.usuario_id = parseInt(params['id']);
    console.log(" en detail " + this.usuario_id);
    this.usuarioDetail = new UsuarioDetail();
    this.getUsuarioDetail();
  }
  ngOnInit() {
    this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
  }

  ngOnDestroy() {
    this.loader.unsubscribe();
  }



}