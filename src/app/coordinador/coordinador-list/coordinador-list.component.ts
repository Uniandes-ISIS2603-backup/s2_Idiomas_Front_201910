import { Component, OnInit } from '@angular/core';
import {Coordinador} from '../coordinador'
import {CoordinadorService} from '../coordinador.service'

@Component({
  selector: 'app-coordinador-list',
  templateUrl: './coordinador-list.component.html',
  styleUrls: ['./coordinador-list.component.css']
})
export class CoordinadorListComponent implements OnInit {

  constructor(private coordinadorService : CoordinadorService) { }

  coordinadores : Coordinador[];

  ngOnInit() 
  {
    this.getCoordinadors();
  }

  getCoordinadors() : void {
   this.coordinadorService.getCoordinadors().subscribe(losU => this.coordinadores = losU);
  }
}