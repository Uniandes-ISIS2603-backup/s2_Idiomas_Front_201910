import { Component, OnInit } from '@angular/core';
import {Anfitrion} from '../anfitrion'
import {AnfitrionService} from '../anfitrion.service'

@Component({
  selector: 'app-anfitrion-list',
  templateUrl: './anfitrion-list.component.html',
  styleUrls: ['./anfitrion-list.component.css']
})
export class AnfitrionListComponent implements OnInit {

  constructor(private anfitrionService : AnfitrionService) { }

  anfitriones : Anfitrion[];

  ngOnInit() 
  {
    this.getAnfitrions();
  }

  getAnfitrions() : void {
   this.anfitrionService.getAnfitrions().subscribe(losU => this.anfitriones = losU);
  }
}