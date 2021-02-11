import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalarieRowComponent } from './salarie-row.component';

describe('SalarieRowComponent', () => {
  let component: SalarieRowComponent;
  let fixture: ComponentFixture<SalarieRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalarieRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalarieRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
