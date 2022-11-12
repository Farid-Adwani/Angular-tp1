import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbaucheListComponent } from './embauche-list.component';

describe('EmbaucheListComponent', () => {
  let component: EmbaucheListComponent;
  let fixture: ComponentFixture<EmbaucheListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmbaucheListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmbaucheListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
