import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabasePageComponent } from './database-page.component';

describe('DatabasePageComponent', () => {
  let component: DatabasePageComponent;
  let fixture: ComponentFixture<DatabasePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatabasePageComponent]
    });
    fixture = TestBed.createComponent(DatabasePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
