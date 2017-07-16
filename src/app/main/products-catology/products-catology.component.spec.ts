import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsCatologyComponent } from './products-catology.component';

describe('ProductsCatologyComponent', () => {
  let component: ProductsCatologyComponent;
  let fixture: ComponentFixture<ProductsCatologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsCatologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsCatologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
