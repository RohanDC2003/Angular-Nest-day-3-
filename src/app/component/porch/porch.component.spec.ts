import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorchComponent } from './porch.component';

describe('PorchComponent', () => {
  let component: PorchComponent;
  let fixture: ComponentFixture<PorchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PorchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PorchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
