import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayIsArrayComponent } from './array-is-array.component';

describe('ArrayIsArrayComponent', () => {
  let component: ArrayIsArrayComponent;
  let fixture: ComponentFixture<ArrayIsArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrayIsArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayIsArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
