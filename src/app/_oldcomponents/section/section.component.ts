import { Component, input } from '@angular/core';

/** Reusable wrapper: gives every section the same id, spacing and heading. */
@Component({
  selector: 'app-section',
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
