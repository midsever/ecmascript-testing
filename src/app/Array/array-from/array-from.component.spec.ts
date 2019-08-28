import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayFromComponent } from './array-from.component';

describe('ArrayFromComponent', () => {
  let component: ArrayFromComponent;
  let fixture: ComponentFixture<ArrayFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrayFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
