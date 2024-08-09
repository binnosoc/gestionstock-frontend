import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCommandeCltFrsComponent } from './detail-commande-clt-frs.component';

describe('DetailCommandeCltFrsComponent', () => {
  let component: DetailCommandeCltFrsComponent;
  let fixture: ComponentFixture<DetailCommandeCltFrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailCommandeCltFrsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailCommandeCltFrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
