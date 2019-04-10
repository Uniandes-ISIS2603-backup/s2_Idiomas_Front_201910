import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadComentarioCreateComponent } from './actividad-comentario-create.component';

describe('ActividadComentarioCreateComponent', () => {
  let component: ActividadComentarioCreateComponent;
  let fixture: ComponentFixture<ActividadComentarioCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActividadComentarioCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadComentarioCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
