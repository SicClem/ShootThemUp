import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnocentComponent } from './innocent.component';

describe('InnocentComponent', () => {
  let component: InnocentComponent;
  let fixture: ComponentFixture<InnocentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnocentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnocentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
