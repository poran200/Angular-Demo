import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ScearchBarComponent} from './scearch-bar.component';

describe('ScearchBarComponent', () => {
  let component: ScearchBarComponent;
  let fixture: ComponentFixture<ScearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScearchBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
