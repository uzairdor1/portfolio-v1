import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { SectionComponent } from '../section/section.component';
import { StackChartComponent } from '../stack-chart/stack-chart.component';

@Component({
  selector: 'app-skills',
  imports: [SectionComponent, StackChartComponent],
  template: `
    <app-section id="skills" title="Skills">
      <div class="grid">
        @for (g of groups; track g.category) {
          <article class="card skill">
            <h3>{{ g.category }}</h3>
            <ul class="chips">@for (i of g.items; track i) { <li class="chip">{{ i }}</li> }</ul>
          </article>
        }
      </div>
      <app-stack-chart />
    </app-section>`,
})
export class SkillsComponent { protected groups = inject(PortfolioService).data.skills; }
