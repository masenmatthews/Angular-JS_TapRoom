import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailKegComponent } from './detail-keg.component';

describe('DetailKegComponent', () => {
  let component: DetailKegComponent;
  let fixture: ComponentFixture<DetailKegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailKegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailKegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
