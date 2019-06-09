import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapshowComponent } from './mapshow.component';

describe('MapshowComponent', () => {
  let component: MapshowComponent;
  let fixture: ComponentFixture<MapshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
