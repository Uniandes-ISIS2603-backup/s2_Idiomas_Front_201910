import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OtroService } from '../otro.service';
import { Otro } from '../otro';

@Component({
  selector: 'app-otro-detail',
  templateUrl: './otro-detail.component.html',
  styleUrls: ['./otro-detail.component.css']
})
export class OtroDetailComponent implements OnInit {
  
  /**
  * The otro
  */
  @Input() otroDetail: Otro;
  /**
  * Constructor for the component
  * @param route The route which helps to retrieves the id of the book to be shown
  * @param otroService The otro's services provider
  * @param toastrService The toastr to show messages to the user
  */
  constructor(
    private route: ActivatedRoute,
    private otroService: OtroService 
    ) { }
    
    
    
    
    /**
    * El id del otro que viene en el path get .../otros/otro_id
    */
    otro_id: number;
    /**
    * The method which obtains the otro whose details we want to show
    */
    getOtroDetail(): void {
      this.otroService.getOtroDetail(this.otro_id)
      .subscribe(otroDetail => {
        this.otroDetail = otroDetail
      });
    }
    
    
    /**
    * The method which initializes the component.
    * We need to create the otro so it is never considered as undefined
    */
    ngOnInit() {
      this.otro_id = +this.route.snapshot.paramMap.get('id');
      if (this.otro_id){
        this.otroDetail = new Otro();
        this.getOtroDetail();
      }
    }
  }