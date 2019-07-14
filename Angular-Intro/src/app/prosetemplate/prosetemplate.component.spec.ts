import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProsetemplateComponent } from './prosetemplate.component';

describe('ProsetemplateComponent', () => {
  let component: ProsetemplateComponent;
  let fixture: ComponentFixture<ProsetemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProsetemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProsetemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
