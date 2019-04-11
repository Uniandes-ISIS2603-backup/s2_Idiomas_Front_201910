import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadComentarioEditComponent } from './actividad-comentario-edit.component';

describe('ActividadComentarioEditComponent', () => {
  let component: ActividadComentarioEditComponent;
  let fixture: ComponentFixture<ActividadComentarioEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActividadComentarioEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadComentarioEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
