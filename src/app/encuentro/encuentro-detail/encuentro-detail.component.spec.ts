import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuentroDetailComponent } from './encuentro-detail.component';

describe('EncuentroDetailComponent', () => {
  let component: EncuentroDetailComponent;
  let fixture: ComponentFixture<EncuentroDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncuentroDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncuentroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
