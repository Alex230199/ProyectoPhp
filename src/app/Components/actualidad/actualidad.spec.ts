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

  it('updates the displayed result when the demo name changes', () => {
    fixture.detectChanges();

    const input = fixture.nativeElement.querySelector('#demo-nombre') as HTMLInputElement;
    input.value = 'Ada';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    const output = fixture.nativeElement.querySelector('.actualidad-demo__output') as HTMLOutputElement;
    expect(output.textContent?.trim()).toBe('Hola, Ada');
  });
});
