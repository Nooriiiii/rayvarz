import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HampaComponent } from './hampa.component';

describe('HampaComponent', () => {
  let component: HampaComponent;
  let fixture: ComponentFixture<HampaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HampaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HampaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
