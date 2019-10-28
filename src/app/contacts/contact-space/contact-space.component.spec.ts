import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSpaceComponent } from './contact-space.component';

describe('ContactSpaceComponent', () => {
  let component: ContactSpaceComponent;
  let fixture: ComponentFixture<ContactSpaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactSpaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
