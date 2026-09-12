import { TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  it('renders the dashboard greeting', async () => {
    await TestBed.configureTestingModule({ imports: [DashboardComponent] }).compileComponents();
    const fixture = TestBed.createComponent(DashboardComponent);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('h1')?.textContent).toContain('Good morning, Tarun');
  });
});
