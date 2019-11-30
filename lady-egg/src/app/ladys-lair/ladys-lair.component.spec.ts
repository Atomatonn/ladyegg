import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LadysLairComponent } from './ladys-lair.component';

describe('LadysLairComponent', () => {
  let component: LadysLairComponent;
  let fixture: ComponentFixture<LadysLairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LadysLairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LadysLairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
