import { Component, computed, inject, signal } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { SectionComponent } from '../section/section.component';

@Component({
  selector: 'app-projects',
  imports: [SectionComponent],
  template: `
    <app-section id="projects" title="Projects" [alt]="true">
      <div class="grid">
        @for (p of visible(); track p.name) {
          <article class="card project">
            <h3>{{ p.name }}</h3>
            <span class="period muted">{{ p.period }}</span>
            <p>{{ p.description }}</p>
            <ul class="chips">@for (t of p.stack; track t) { <li class="chip">{{ t }}</li> }</ul>
            @if (p.link) { <a class="btn ghost" [href]="p.link" target="_blank" rel="noopener">View project</a> }
          </article>
        }
      </div>
      @if (all.length > initialCount) {
        <div class="more">
          <button class="btn ghost" (click)="expanded.set(!expanded())">{{ expanded() ? 'Show fewer' : 'Show all ' + all.length + ' projects' }}</button>
        </div>
      }
    </app-section>`,
})
export class ProjectsComponent {
  protected all = inject(PortfolioService).data.projects;
  protected initialCount = 6;
  protected expanded = signal(false);
  protected visible = computed(() => (this.expanded() ? this.all : this.all.slice(0, this.initialCount)));
}
