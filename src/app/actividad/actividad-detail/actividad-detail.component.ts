import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActividadService } from '../actividad.service';
import { ActividadDetail } from '../actividad-detail';

@Component({
  selector: 'app-actividad-detail',
  templateUrl: './actividad-detail.component.html',
  styleUrls: ['./actividad-detail.component.css']
})
export class ActividadDetailComponent implements OnInit {
  
  /**
  * The actividad
  */
  @Input() actividadDetail: ActividadDetail;
  /**
  * Constructor for the component
  * @param route The route which helps to retrieves the id of the book to be shown
  * @param actividadService The actividad's services provider
  * @param toastrService The toastr to show messages to the user
  */
  constructor(
    private route: ActivatedRoute,
    private actividadService: ActividadService 
    ) { }
    
    
    
    
    /**
    * El id del actividad que viene en el path get .../actividades/actividad_id
    */
    actividad_id: number;
    /**
    * The method which obtains the actividad whose details we want to show
    */
    getActividadDetail(): void {
      this.actividadService.getActividadDetail(this.actividad_id)
      .subscribe(actividadDetail => {
        this.actividadDetail = actividadDetail
      });
    }
    
    
    /**
    * The method which initializes the component.
    * We need to create the actividad so it is never considered as undefined
    */
    ngOnInit() {
      this.actividad_id = +this.route.snapshot.paramMap.get('id');
      if (this.actividad_id){
        this.actividadDetail = new ActividadDetail();
        this.getActividadDetail();
      }
    }
  }
