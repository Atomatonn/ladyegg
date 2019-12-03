import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarWarsRipoffComponent } from './star-wars-ripoff.component';

describe('StarWarsRipoffComponent', () => {
  let component: StarWarsRipoffComponent;
  let fixture: ComponentFixture<StarWarsRipoffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarWarsRipoffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarWarsRipoffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
