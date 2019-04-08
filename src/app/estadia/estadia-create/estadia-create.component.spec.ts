import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadiaCreateComponent } from './estadia-create.component';

describe('EstadiaCreateComponent', () => {
  let component: EstadiaCreateComponent;
  let fixture: ComponentFixture<EstadiaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadiaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadiaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
