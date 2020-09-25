import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturalsComponent } from './culturals.component';

describe('CulturalsComponent', () => {
  let component: CulturalsComponent;
  let fixture: ComponentFixture<CulturalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CulturalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CulturalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
