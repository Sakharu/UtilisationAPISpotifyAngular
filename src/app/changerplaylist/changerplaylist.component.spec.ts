import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangerplaylistComponent } from './changerplaylist.component';

describe('ChangerplaylistComponent', () => {
  let component: ChangerplaylistComponent;
  let fixture: ComponentFixture<ChangerplaylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangerplaylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangerplaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
