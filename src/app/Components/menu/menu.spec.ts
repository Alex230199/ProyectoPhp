import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Menu } from './menu';

describe('Menu', () => {
  let component: Menu;
  let fixture: ComponentFixture<Menu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Menu],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Menu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('opens the mobile menu with all section links', () => {
    fixture.detectChanges();

    const mobileMenu = fixture.nativeElement.querySelector('.mobile-menu') as HTMLDetailsElement;
    expect(mobileMenu.querySelectorAll('a').length).toBe(6);
    expect(mobileMenu.open).toBe(false);

    mobileMenu.querySelector('summary')?.dispatchEvent(new MouseEvent('click', { bubbles: true }));

    expect(mobileMenu.open).toBe(true);
  });
});
