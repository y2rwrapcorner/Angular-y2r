import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomgiftComponent } from './customgift.component';

describe('CustomgiftComponent', () => {
  let component: CustomgiftComponent;
  let fixture: ComponentFixture<CustomgiftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomgiftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomgiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
