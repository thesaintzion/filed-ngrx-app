import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetStartedRootComponent } from './get-started-root.component';

describe('GetStartedRootComponent', () => {
  let component: GetStartedRootComponent;
  let fixture: ComponentFixture<GetStartedRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetStartedRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetStartedRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
