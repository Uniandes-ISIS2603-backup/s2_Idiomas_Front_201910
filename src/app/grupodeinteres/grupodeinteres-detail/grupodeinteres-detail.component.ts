import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { GrupoDeInteresService } from '../grupodeinteres.service';
import { GrupoDeInteres } from '../grupodeinteres';
import { GrupoDeInteresDetail } from '../grupodeinteres-detail';

@Component({
  selector: 'app-grupodeinteres-detail',
  templateUrl: './grupodeinteres-detail.component.html',
  styleUrls: ['./grupodeinteres-detail.component.css']
})
export class GrupoDeInteresDetailComponent implements OnInit {

  /**
  * The component's constructor
  * @param editorialService The editorial's service
  * @param route The route element which helps to obtain the editorial's id
  * @param toastrService The toastr to show messages to the user
  */
  constructor(
    private grupodeinteresService: GrupoDeInteresService,
    private route: ActivatedRoute
  ) { }

  /**
  * The editorial whose details we want to show
  */
  grupoDeInteresDetail: GrupoDeInteresDetail;



  /**
  * The editorial's id retrieved from the address
  */
  @Input() grupodeInteres_id: number;

  loader: any;
  /**
  * The method which retrieves the books of an editorial
  */
  getGrupoDeInteresDetail(): void {

    this.grupodeinteresService.getGrupoDeInteresDetail(this.grupodeInteres_id)
      .subscribe(o => {
        this.grupoDeInteresDetail = o
      });
  }

  onLoad(params) {

    this.grupodeInteres_id = parseInt(params['id']);
    console.log(" en detail " + this.grupodeInteres_id);
    this.grupoDeInteresDetail = new GrupoDeInteresDetail();
    this.getGrupoDeInteresDetail();
  }
  ngOnInit() {
    this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
  }

  ngOnDestroy() {
    this.loader.unsubscribe();
  }

}
