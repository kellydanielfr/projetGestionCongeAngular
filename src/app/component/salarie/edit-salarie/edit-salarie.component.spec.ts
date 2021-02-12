import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSalarieComponent } from './edit-salarie.component';

describe('EditSalarieComponent', () => {
  let component: EditSalarieComponent;
  let fixture: ComponentFixture<EditSalarieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSalarieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSalarieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
