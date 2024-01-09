import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetBuzonesComponent } from './widget-buzones.component';

describe('WidgetBuzonesComponent', () => {
  let component: WidgetBuzonesComponent;
  let fixture: ComponentFixture<WidgetBuzonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetBuzonesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetBuzonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
