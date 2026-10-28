import { Component, input } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';

/** Reusable wrapper: same id, spacing, heading, and scroll-reveal for every section. */
@Component({
  selector: 'app-section',
  hostDirectives: [RevealDirective],
  template: `
    <section class="section" [class.alt]="alt()" [id]="id()">
      <div class="container">
        <h2>{{ title() }}</h2>
        <ng-content />
      </div>
    </section>`,
})
export class SectionComponent {
  id = input.required<string>();
  title = input.required<string>();
  alt = input(false);
}
