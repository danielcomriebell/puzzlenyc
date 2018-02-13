import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedTransactionsComponent } from './selected-transactions.component';

describe('SelectedTransactionsComponent', () => {
  let component: SelectedTransactionsComponent;
  let fixture: ComponentFixture<SelectedTransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedTransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
