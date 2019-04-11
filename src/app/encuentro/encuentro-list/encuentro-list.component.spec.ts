import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuentroListComponent } from './encuentro-list.component';

describe('EncuentroListComponent', () => {
  let component: EncuentroListComponent;
  let fixture: ComponentFixture<EncuentroListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncuentroListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncuentroListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
