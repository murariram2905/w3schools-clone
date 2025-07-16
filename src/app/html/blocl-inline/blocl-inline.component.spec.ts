import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloclInlineComponent } from './blocl-inline.component';

describe('BloclInlineComponent', () => {
  let component: BloclInlineComponent;
  let fixture: ComponentFixture<BloclInlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BloclInlineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BloclInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
