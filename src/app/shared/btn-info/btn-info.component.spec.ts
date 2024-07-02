import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnInfoComponent } from './btn-info.component';

describe('BtnInfoComponent', () => {
  let component: BtnInfoComponent;
  let fixture: ComponentFixture<BtnInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BtnInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BtnInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
