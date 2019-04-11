import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { AnfitrionService } from '../anfitrion.service';
import { Anfitrion } from '../anfitrion';
import { AnfitrionDetail } from '../anfitrion-detail';


@Component({
  selector: 'app-anfitrion-detail',
  templateUrl: './anfitrion-detail.component.html',
  styleUrls: ['./anfitrion-detail.component.css']
})
export class AnfitrionDetailComponent implements OnInit {

  constructor( private anfitrionService: AnfitrionService,
    private route: ActivatedRoute) { }
    
 /**
  * The anfitrion whose details we want to show
  */
  anfitrionDetail: AnfitrionDetail;
  actividades : number[];
  grupos: number[];



  /**
  * The anfitrion's id retrieved from the address
  */
  @Input() anfitrion_id: number;

  loader: any;
  /**
  * The method which retrieves the books of an anfitrion
  */
  getAnfitrionDetail(): void {

    this.anfitrionService.getAnfitrionDetail(this.anfitrion_id)
      .subscribe(o => {
        this.anfitrionDetail = o;
        this.actividades = o.actividades;
        this.grupos = o.grupos;
      });
  }

  onLoad(params) {

    this.anfitrion_id = parseInt(params['id']);
    console.log(" en detail " + this.anfitrion_id);
    this.anfitrionDetail = new AnfitrionDetail();
    this.getAnfitrionDetail();
  }
  ngOnInit() {
    this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
  }

  ngOnDestroy() {
    this.loader.unsubscribe();
  }



}