import { Injectable, signal } from '@angular/core';

/** Smooth scrolling and "which section is on screen" tracking for the navbar highlight. */
@Injectable({ providedIn: 'root' })
export class ScrollService {
  readonly active = signal('home');
  private observer?: IntersectionObserver;

  /** Watch the given section ids; the one crossing the middle of the viewport becomes active. */
  observe(ids: string[]): void {
    this.observer?.disconnect();
    this.observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && this.active.set(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    );
    ids.forEach(id => { const el = document.getElementById(id); if (el) this.observer!.observe(el); });
  }

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
