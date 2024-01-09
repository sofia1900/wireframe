import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetEspacioComponent } from './widget-espacio.component';

describe('WidgetEspacioComponent', () => {
  let component: WidgetEspacioComponent;
  let fixture: ComponentFixture<WidgetEspacioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetEspacioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetEspacioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
