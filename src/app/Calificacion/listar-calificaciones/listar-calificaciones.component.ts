import { Component, OnInit } from '@angular/core';
import { CalificacionesService } from '../calificaciones.service';
import { Calificacion } from '../calificacion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-calificaciones',
  templateUrl: './listar-calificaciones.component.html',
  styleUrls: ['./listar-calificaciones.component.css']
})
export class ListarCalificacionesComponent implements OnInit {

  constructor(private CalificacionesService : CalificacionesService, private Router : Router) { }

  calificacion_id : number;
  calificaciones : Calificacion[];

  getCalificaciones(): void{
    this.CalificacionesService.getCalificaciones().subscribe(calificaciones => this.calificaciones = calificaciones);
  }

  ngOnInit() {
    this.getCalificaciones();
  }

}