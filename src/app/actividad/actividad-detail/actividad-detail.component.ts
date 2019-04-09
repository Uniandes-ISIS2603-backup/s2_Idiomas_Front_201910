import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActividadService } from '../actividad.service';

@Component({
  selector: 'app-actividad-detail',
  templateUrl: './actividad-detail.component.html',
  styleUrls: ['./actividad-detail.component.css']
})
export class ActividadDetailComponent implements OnInit {

  constructor(
    private actividadService: ActividadService,
    private route: ActivatedRoute
  ) { }
    actividad_id: number;


  ngOnInit() {
    this.actividad_id = +this.route.snapshot.paramMap.get('id');
  }

}
