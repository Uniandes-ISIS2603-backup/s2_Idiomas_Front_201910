import { Component, OnInit, Input } from '@angular/core';
import {CoordinadorService} from '../coordinador.service';
import {ActivatedRoute, Params} from '@angular/router';
import {CoordinadorDetail} from '../coordinador-detail';

@Component({
  selector: 'app-coordinador-detail',
  templateUrl: './coordinador-detail.component.html',
  styleUrls: ['./coordinador-detail.component.css']
})
export class CoordinadorDetailComponent implements OnInit {

constructor( private coordinadorService: CoordinadorService,
    private route: ActivatedRoute) { }
    
 /**
  * The coordinador whose details we want to show
  */
  coordinadorDetail: CoordinadorDetail;
  actividades : number[];
  grupos: number[];



  /**
  * The coordinador's id retrieved from the address
  */
  @Input() coordinador_id: number;

  loader: any;
  /**
  * The method which retrieves the books of an coordinador
  */
  getCoordinadorDetail(): void {

    this.coordinadorService.getCoordinadorDetail(this.coordinador_id)
      .subscribe(o => {
        this.coordinadorDetail = o;

      });
  }

  onLoad(params) {

    this.coordinador_id = parseInt(params['id']);
    console.log(" en detail " + this.coordinador_id);
    this.coordinadorDetail = new CoordinadorDetail();
    this.getCoordinadorDetail();
  }
  ngOnInit() {
    this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
  }

  ngOnDestroy() {
    this.loader.unsubscribe();
  }
}