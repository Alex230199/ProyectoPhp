import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Noticias } from './noticias';

describe('Noticias', () => {
  let component: Noticias;
  let fixture: ComponentFixture<Noticias>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Noticias],
    }).compileComponents();

    fixture = TestBed.createComponent(Noticias);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('includes the PHP report in a collapsible section', () => {
    fixture.detectChanges();

    const report = fixture.nativeElement.querySelector('.news-report') as HTMLDetailsElement;
    const video = report.querySelector('iframe') as HTMLIFrameElement;

    expect(report.querySelector('summary')?.textContent?.trim()).toBe('Reportaje');
    expect(video.src).toContain('youtube-nocookie.com/embed/HrPHIKGJmr8');
    expect(video.title).toContain('vulnerabilidad PHP');
    expect(video.getAttribute('loading')).toBe('lazy');
  });
});
