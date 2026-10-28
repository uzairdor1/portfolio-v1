import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { ScrollService } from '../../services/scroll.service';
import { CodeSnippetComponent } from '../code-snippet/code-snippet.component';

@Component({
  selector: 'app-hero',
  imports: [CodeSnippetComponent],
  template: `
    <section class="hero" id="home">
      <div class="container">
        <div>
          <p class="prompt">$ whoami</p>
          <h1>{{ p.name }}</h1>
          <p class="title">{{ p.title }}</p>
          <p class="tagline">{{ p.tagline }}</p>
          <div class="actions">
            <a class="btn primary" href="#projects" (click)="go($event, 'projects')">./view-work</a>
            <a class="btn ghost" href="#contact" (click)="go($event, 'contact')">./contact</a>
          </div>
          <div class="stats">
            @for (s of p.stats; track s.label) { <div><strong>{{ s.value }}</strong><span class="muted">{{ s.label }}</span></div> }
          </div>
        </div>
        <div class="term">
          <header><i></i><i></i><i></i><span>developer.ts</span></header>
          <app-code-snippet [code]="snippet" />
        </div>
      </div>
    </section>`,
})
export class HeroComponent {
  private scroll = inject(ScrollService);
  protected p = inject(PortfolioService).data.profile;

  /** Snippet text is built from your data file, so it stays in sync with the rest of the site. */
  protected snippet = [
    '// profile loaded',
    'const developer = {',
    `  name: '${this.p.name}',`,
    `  role: '${this.p.title}',`,
    "  stack: ['Node.js', 'Angular', 'PHP', 'MySQL'],",
    `  projects: ${this.p.stats[1].value},`,
    "  focus: 'clean, maintainable code',",
    '};',
    '',
    'developer.build();',
  ].join('\n');

  protected go(e: Event, id: string): void { e.preventDefault(); this.scroll.scrollTo(id); }
}
