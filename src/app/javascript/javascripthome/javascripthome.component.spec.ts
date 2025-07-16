import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascripthomeComponent } from './javascripthome.component';

describe('JavascripthomeComponent', () => {
  let component: JavascripthomeComponent;
  let fixture: ComponentFixture<JavascripthomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JavascripthomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavascripthomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
