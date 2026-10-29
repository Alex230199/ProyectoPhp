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

  it('updates the local checklist progress', () => {
    expect(component.completedSteps).toBe(0);

    component.toggleStepComplete(1);

    expect(component.isStepComplete(1)).toBe(true);
    expect(component.completedSteps).toBe(1);

    component.toggleStepComplete(1);

    expect(component.isStepComplete(1)).toBe(false);
    expect(component.completedSteps).toBe(0);
  });

  it('keeps the checklist button visible and independent from the step content', () => {
    fixture.detectChanges();

    const secondStep = fixture.nativeElement.querySelectorAll('.twinteach-step')[1] as HTMLElement;
    const expandButton = secondStep.querySelector('.twinteach-step__expand') as HTMLButtonElement;
    const checklistButton = secondStep.querySelector('.twinteach-step__toggle') as HTMLButtonElement;
    const body = secondStep.querySelector('.twinteach-step__body') as HTMLDivElement;

    expect(body.hidden).toBe(true);
    checklistButton.click();
    fixture.detectChanges();

    expect(checklistButton.getAttribute('aria-pressed')).toBe('true');
    expect(body.hidden).toBe(true);

    expandButton.click();
    fixture.detectChanges();

    expect(body.hidden).toBe(false);
    expect(expandButton.getAttribute('aria-expanded')).toBe('true');
  });
});
