import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';

/** Two pure-CSS charts computed from the projects in portfolio.data.ts (no chart library). */
@Component({
  selector: 'app-stack-chart',
  template: `
    <div class="viz">
      <figure class="card" style="margin:0">
        <h3>$ stack --count  <span class="muted">(projects per technology)</span></h3>
        @for (b of bars; track b.label) {
          <div class="bar"><span>{{ b.label }}</span><i [style.--w]="b.pct + '%'"></i><b>{{ b.n }}</b></div>
        }
      </figure>
      <figure class="card" style="margin:0">
        <h3>$ projects --by-year</h3>
        <div class="cols">
          @for (c of years; track c.label) { <div>{{ c.n }}<i [style.--h]="c.px + 'px'"></i>{{ c.label }}</div> }
        </div>
      </figure>
    </div>`,
})
export class StackChartComponent {
  private projects = inject(PortfolioService).data.projects;

  protected bars = this.tally(this.projects.flatMap(p => this.getTechs(p.stack))).slice(0, 7)
    .map((e, _, a) => ({ label: e[0], n: e[1], pct: Math.round((e[1] / a[0][1]) * 100) }));

  /** Year = first 4-digit year found in each project's `period` string. */
  protected years = [...this.tally(this.projects.map(p => p.period.match(/\d{4}/)![0])).sort((a, b) => +a[0] - +b[0])]
    .map((e, _, a) => ({ label: e[0], n: e[1], px: Math.round((e[1] / Math.max(...a.map(x => x[1]))) * 130) }));

  private getTechs(stack: string[]): string[] {
    const s = stack;
    if (s.includes('PHP') && s.includes('CodeIgniter')) {
      return [...s.filter(t => t !== 'PHP' && t !== 'CodeIgniter'), 'PHP CodeIgniter'];
    }
    if (s.includes('PHP') && s.includes('Yii')) {
      return [...s.filter(t => t !== 'PHP' && t !== 'Yii'), 'PHP Yii'];
    }
    return s;
  }

  private tally(items: string[]): [string, number][] {
    const m = new Map<string, number>();
    items.forEach(i => m.set(i, (m.get(i) ?? 0) + 1));
    return [...m.entries()].sort((a, b) => b[1] - a[1]);
  }
}
