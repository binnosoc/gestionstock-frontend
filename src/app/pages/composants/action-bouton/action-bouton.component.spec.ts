import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionBoutonComponent } from './action-bouton.component';

describe('ActionBoutonComponent', () => {
  let component: ActionBoutonComponent;
  let fixture: ComponentFixture<ActionBoutonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActionBoutonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionBoutonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
