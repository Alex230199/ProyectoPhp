import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImplementacionYUsos } from './actualidad';

describe('Actualidad', () => {
  let component: ImplementacionYUsos;
  let fixture: ComponentFixture<ImplementacionYUsos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImplementacionYUsos],
    }).compileComponents();

    fixture = TestBed.createComponent(ImplementacionYUsos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
