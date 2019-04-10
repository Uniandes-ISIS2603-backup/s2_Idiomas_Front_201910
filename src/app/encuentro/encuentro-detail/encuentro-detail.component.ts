import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EncuentroService } from '../encuentro.service';
import { Encuentro } from '../encuentro';

@Component({
  selector: 'app-encuentro-detail',
  templateUrl: './encuentro-detail.component.html',
  styleUrls: ['./encuentro-detail.component.css']
})
export class EncuentroDetailComponent implements OnInit {
  
  /**
  * The encuentro
  */
  @Input() encuentroDetail: Encuentro;
  /**
  * Constructor for the component
  * @param route The route which helps to retrieves the id of the book to be shown
  * @param encuentroService The encuentro's services provider
  * @param toastrService The toastr to show messages to the user
  */
  constructor(
    private route: ActivatedRoute,
    private encuentroService: EncuentroService 
    ) { }
    
    
    
    
    /**
    * El id del encuentro que viene en el path get .../encuentros/encuentro_id
    */
    encuentro_id: number;
    /**
    * The method which obtains the encuentro whose details we want to show
    */
    getEncuentroDetail(): void {
      this.encuentroService.getEncuentroDetail(this.encuentro_id)
      .subscribe(encuentroDetail => {
        this.encuentroDetail = encuentroDetail
      });
    }
    
    
    /**
    * The method which initializes the component.
    * We need to create the encuentro so it is never considered as undefined
    */
    ngOnInit() {
      this.encuentro_id = +this.route.snapshot.paramMap.get('id');
      if (this.encuentro_id){
        this.encuentroDetail = new Encuentro();
        this.getEncuentroDetail();
      }
    }
  }