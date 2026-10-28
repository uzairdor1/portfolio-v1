import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { SectionComponent } from '../section/section.component';

/** Vertical timeline; the line and dots are drawn in styles.css (.timeline). */
@Component({
  selector: 'app-experience',
  imports: [SectionComponent],
  template: `
    <app-section id="experience" title="Work experience" [alt]="true">
      <ol class="timeline">
        @for (job of jobs; track job.company + job.period) {
          <li class="card">
            <h3>{{ job.role }}</h3>
            <p class="muted">{{ job.company }}, {{ job.location }} · {{ job.period }}</p>
            <ul>@for (h of job.highlights; track h) { <li>{{ h }}</li> }</ul>
          </li>
        }
      </ol>
    </app-section>`,
})
export class ExperienceComponent { protected jobs = inject(PortfolioService).data.experience; }
