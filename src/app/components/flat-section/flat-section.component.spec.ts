import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatSectionComponent } from './flat-section.component';

describe('FlatSectionComponent', () => {
  let component: FlatSectionComponent;
  let fixture: ComponentFixture<FlatSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlatSectionComponent]
    });
    fixture = TestBed.createComponent(FlatSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
