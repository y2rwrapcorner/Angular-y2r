import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SofttoysComponent } from './softtoys.component';

describe('SofttoysComponent', () => {
  let component: SofttoysComponent;
  let fixture: ComponentFixture<SofttoysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SofttoysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SofttoysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
