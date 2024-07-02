import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnCloseComponent } from './btn-close.component';

describe('BtnCloseComponent', () => {
  let component: BtnCloseComponent;
  let fixture: ComponentFixture<BtnCloseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BtnCloseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BtnCloseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
