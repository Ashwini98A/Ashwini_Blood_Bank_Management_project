import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllrequestsComponent } from './allrequests.component';

describe('AllrequestsComponent', () => {
  let component: AllrequestsComponent;
  let fixture: ComponentFixture<AllrequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllrequestsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllrequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
