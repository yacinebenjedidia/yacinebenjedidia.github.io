import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnamePageComponent } from './addname-page.component';

describe('AddnamePageComponent', () => {
  let component: AddnamePageComponent;
  let fixture: ComponentFixture<AddnamePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddnamePageComponent]
    });
    fixture = TestBed.createComponent(AddnamePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
