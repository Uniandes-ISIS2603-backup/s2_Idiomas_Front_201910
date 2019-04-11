import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CalificacionesService } from '../../calificaciones.service';
import { Calificacion } from '../../calificacion';
import { CalificacionDetail } from '../../calificacion-detail';

@Component({
  selector: 'app-calificaciones-detail',
  templateUrl: './calificaciones-detail.component.html',
  styleUrls: ['./calificaciones-detail.component.css']
})
export class CalificacionesDetailComponent implements OnInit {

  constructor( 
    private calificacionesService : CalificacionesService,
    private route: ActivatedRoute
  ) { }

  calificacionDetail : CalificacionDetail;
  @Input() calificacion_id : number;
  loader : any;

   getCalificacionDetail(): void {

    this.calificacionesService.getCalificacionDetail(this.calificacion_id)
      .subscribe(o => {
        this.calificacionDetail = o
      });
  }

  onLoad(params) {
    this.calificacion_id = parseInt(params['id']);
    console.log(" en detail " + this.calificacion_id);
    this.calificacionDetail = new CalificacionDetail();
    this.getCalificacionDetail();
  }

  ngOnInit() {
    this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
  }

  ngOnDestroy() {
    this.loader.unsubscribe();
  }

}