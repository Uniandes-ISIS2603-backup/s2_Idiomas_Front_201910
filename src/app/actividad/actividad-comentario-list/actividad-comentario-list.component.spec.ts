import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadComentarioListComponent } from './actividad-comentario-list.component';

describe('ActividadComentarioListComponent', () => {
  let component: ActividadComentarioListComponent;
  let fixture: ComponentFixture<ActividadComentarioListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActividadComentarioListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadComentarioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
