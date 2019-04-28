import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GrupoDeInteres } from '../grupodeinteres';
import { GrupoDeInteresService } from '../grupodeinteres.service';

/**
 * The component for the list of editorials in the BookStore
 */
@Component({ 
  selector: 'list-editorial',
  templateUrl: './editorial-list.component.html',
})
export class GrupoDeInteresListComponent implements OnInit {

  /**
   * Constructor for the component
   * @param editorialService The author's services provider
   */
  constructor(private grupodeinteresService: GrupoDeInteresService, private router: Router) { }

  /**
   * The list of editorials which belong to the BookStore
   */
  grupodeinteress: GrupoDeInteres[];

  /**
   * Asks the service to update the list of editorials
   */
  getGrupoDeInteres(): void {
    this.grupodeinteresService.getGrupoDeInteres().subscribe(grupodeinteres => this.grupodeinteress = grupodeinteres);
  }

  
  /**
   * This will initialize the component by retrieving the list of editorials from the service
   * This method will be called when the component is created
   */
  ngOnInit() {
    this.getGrupoDeInteres();
  }
}