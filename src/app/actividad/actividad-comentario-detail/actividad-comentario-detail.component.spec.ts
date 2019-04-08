import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadComentarioDetailComponent } from './actividad-comentario-detail.component';

describe('ActividadComentarioDetailComponent', () => {
  let component: ActividadComentarioDetailComponent;
  let fixture: ComponentFixture<ActividadComentarioDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActividadComentarioDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadComentarioDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
