import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnSucessComponent } from './btn-sucess.component';

describe('BtnSucessComponent', () => {
  let component: BtnSucessComponent;
  let fixture: ComponentFixture<BtnSucessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BtnSucessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BtnSucessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
