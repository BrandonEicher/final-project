import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XEditComponent } from './x-edit.component';

describe('XEditComponent', () => {
  let component: XEditComponent;
  let fixture: ComponentFixture<XEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [XEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(XEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
