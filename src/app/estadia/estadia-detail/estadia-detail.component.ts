import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EstadiaService } from '../estadia.service';
import { EstadiaDetail } from '../estadia-detail';

@Component({
  selector: 'app-estadia-detail',
  templateUrl: './estadia-detail.component.html',
  styleUrls: ['./estadia-detail.component.css']
})
export class EstadiaDetailComponent implements OnInit {
  
  /**
  * The estadia
  */
  @Input() estadiaDetail: EstadiaDetail;
  /**
  * Constructor for the component
  * @param route The route which helps to retrieves the id of the book to be shown
  * @param estadiaService The estadia's services provider
  * @param toastrService The toastr to show messages to the user
  */
  constructor(
    private route: ActivatedRoute,
    private estadiaService: EstadiaService 
    ) { }
    
    
    
    
    /**
    * El id del estadia que viene en el path get .../estadias/estadia_id
    */
    estadia_id: number;
    /**
    * The method which obtains the estadia whose details we want to show
    */
    getEstadiaDetail(): void {
      this.estadiaService.getEstadiaDetail(this.estadia_id)
      .subscribe(estadiaDetail => {
        this.estadiaDetail = estadiaDetail
      });
    }
    
    
    /**
    * The method which initializes the component.
    * We need to create the estadia so it is never considered as undefined
    */
    ngOnInit() {
      this.estadia_id = +this.route.snapshot.paramMap.get('id');
      if (this.estadia_id){
        this.estadiaDetail = new EstadiaDetail();
        this.getEstadiaDetail();
      }
    }
  }