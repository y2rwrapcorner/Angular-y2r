import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VneckComponent } from './vneck.component';

describe('VneckComponent', () => {
  let component: VneckComponent;
  let fixture: ComponentFixture<VneckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VneckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VneckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
