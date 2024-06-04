import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XFeedComponent } from './x-feed.component';

describe('XFeedComponent', () => {
  let component: XFeedComponent;
  let fixture: ComponentFixture<XFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [XFeedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(XFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
