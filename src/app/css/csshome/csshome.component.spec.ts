import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsshomeComponent } from './csshome.component';

describe('CsshomeComponent', () => {
  let component: CsshomeComponent;
  let fixture: ComponentFixture<CsshomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CsshomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
