import { Component, OnInit } from '@angular/core';
import { AdministradorService} from '../administrador.service'
import { Administrador } from '../administrador';

@Component({
  selector: 'app-administrador-list',
  templateUrl: './administrador-list.component.html',
  styleUrls: ['./administrador-list.component.css']
})
export class AdministradorListComponent implements OnInit {

  constructor(private serviece :AdministradorService) { }

  administradores :Administrador[];

  ngOnInit() {
    this.getAdministradores();
  }

  getAdministradores(){
    this.serviece.getAdministradores().subscribe(o => this.administradores = o);
  }
}