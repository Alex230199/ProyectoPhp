import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MasInformacion } from './mas-informacion';

describe('MasInformacion', () => {
  let component: MasInformacion;
  let fixture: ComponentFixture<MasInformacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasInformacion],
    }).compileComponents();

    fixture = TestBed.createComponent(MasInformacion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
