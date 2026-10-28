import { DestroyRef, Directive, ElementRef, inject, signal } from '@angular/core';

/** Adds `.reveal`, then `.in` the first time the element scrolls into view (observer is then released). */
@Directive({ selector: '[appReveal]', host: { class: 'reveal', '[class.in]': 'seen()' } })
export class RevealDirective {
  protected seen = signal(false);

  constructor() {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { this.seen.set(true); io.disconnect(); }
    }, { threshold: 0.12 });
    io.observe(inject(ElementRef).nativeElement);
    inject(DestroyRef).onDestroy(() => io.disconnect());
  }
}
