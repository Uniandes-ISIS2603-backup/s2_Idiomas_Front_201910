import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuentroCreateComponent } from './encuentro-create.component';

describe('EncuentroCreateComponent', () => {
  let component: EncuentroCreateComponent;
  let fixture: ComponentFixture<EncuentroCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncuentroCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncuentroCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
