import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { AdministradorService } from '../administrador.service';
import { Administrador } from '../administrador';
import { AdministradorDetail } from '../administrador-detail';

@Component({
  selector: 'app-administrador-detail',
  templateUrl: './administrador-detail.component.html',
  styleUrls: ['./administrador-detail.component.css']
})
export class AdministradorDetailComponent implements OnInit {

 constructor( private administradorService: AdministradorService,
    private route: ActivatedRoute) { }
    
 /**
  * The administrador whose details we want to show
  */
  administradorDetail: AdministradorDetail;
  actividades : string[];
  grupos: string[];



  /**
  * The administrador's id retrieved from the address
  */
  @Input() administrador_id: number;

  loader: any;
  /**
  * The method which retrieves the books of an administrador
  */
  getAdministradorDetail(): void {

    this.administradorService.getAdministrador(this.administrador_id)
      .subscribe(o => {
        this.administradorDetail = o;
        this.actividades = o.actividades;
        this.grupos = o.grupos;
      });
  }

  onLoad(params) {

    this.administrador_id = parseInt(params['id']);
    console.log(" en detail " + this.administrador_id);
    this.administradorDetail = new AdministradorDetail();
    this.getAdministradorDetail();
  }
  ngOnInit() {
    this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
  }

  ngOnDestroy() {
    this.loader.unsubscribe();
  }

}