import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetStartedFooterComponent } from './get-started-footer.component';

describe('GetStartedFooterComponent', () => {
  let component: GetStartedFooterComponent;
  let fixture: ComponentFixture<GetStartedFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetStartedFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetStartedFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
