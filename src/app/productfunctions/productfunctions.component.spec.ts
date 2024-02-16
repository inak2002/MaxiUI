import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductfunctionsComponent } from './productfunctions.component';

describe('ProductfunctionsComponent', () => {
  let component: ProductfunctionsComponent;
  let fixture: ComponentFixture<ProductfunctionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductfunctionsComponent]
    });
    fixture = TestBed.createComponent(ProductfunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
