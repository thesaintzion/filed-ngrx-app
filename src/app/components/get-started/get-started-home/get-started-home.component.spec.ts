import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetStartedHomeComponent } from './get-started-home.component';

describe('GetStartedHomeComponent', () => {
  let component: GetStartedHomeComponent;
  let fixture: ComponentFixture<GetStartedHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetStartedHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetStartedHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
