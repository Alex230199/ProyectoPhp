import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Twinteach } from './twinteach';

describe('Twinteach', () => {
  let component: Twinteach;
  let fixture: ComponentFixture<Twinteach>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Twinteach],
    }).compileComponents();

    fixture = TestBed.createComponent(Twinteach);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
