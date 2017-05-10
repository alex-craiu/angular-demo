import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatermelonComponent } from './watermelon.component';

describe('WatermelonComponent', () => {
  let component: WatermelonComponent;
  let fixture: ComponentFixture<WatermelonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatermelonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatermelonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
