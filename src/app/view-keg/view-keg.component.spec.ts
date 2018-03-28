import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewKegComponent } from './view-keg.component';

describe('ViewKegComponent', () => {
  let component: ViewKegComponent;
  let fixture: ComponentFixture<ViewKegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewKegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewKegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
