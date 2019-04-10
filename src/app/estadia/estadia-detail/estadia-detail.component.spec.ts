import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadiaDetailComponent } from './estadia-detail.component';

describe('EstadiaDetailComponent', () => {
  let component: EstadiaDetailComponent;
  let fixture: ComponentFixture<EstadiaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadiaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadiaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
