import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { SectionComponent } from '../section/section.component';

@Component({
  selector: 'app-education',
  imports: [SectionComponent],
  template: `
    <app-section id="education" title="Education">
      <div class="grid">
        @for (e of items; track e.degree) {
          <article class="card edu">
            <h3>{{ e.degree }}</h3>
            <p>{{ e.institute }}</p>
            <p class="muted">{{ e.period }}@if (e.note) { · {{ e.note }} }</p>
          </article>
        }
      </div>
    </app-section>`,
})
export class EducationComponent { protected items = inject(PortfolioService).data.education; }
