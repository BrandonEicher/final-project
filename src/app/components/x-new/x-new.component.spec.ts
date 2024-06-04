import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XNewComponent } from './x-new.component';

describe('XNewComponent', () => {
  let component: XNewComponent;
  let fixture: ComponentFixture<XNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [XNewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(XNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
