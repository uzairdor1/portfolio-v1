import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-hero',
  template: `
    <section class="hero" id="home">
      <div class="container">
        <div>
          <h1>{{ p.name }}</h1>
          <p class="title">{{ p.title }}</p>
          <p class="tagline">{{ p.tagline }}</p>
          <div class="actions">
            <a class="btn primary" href="#projects" (click)="go($event, 'projects')">View my work</a>
            <a class="btn ghost" href="#contact" (click)="go($event, 'contact')">Get in touch</a>
          </div>
          <div class="stats">
            @for (s of p.stats; track s.label) {
              <div><strong>{{ s.value }}</strong><span class="muted">{{ s.label }}</span></div>
            }
          </div>
        </div>
        <!-- Shows your photo if profile.photo is set, otherwise your initials -->
        <div class="avatar">
          @if (p.photo) { <img [src]="p.photo" [alt]="'Photo of ' + p.name" /> } @else { <span aria-hidden="true">{{ initials }}</span> }
        </div>
      </div>
    </section>`,
})
export class HeroComponent {
  private scroll = inject(ScrollService);
  protected p = inject(PortfolioService).data.profile;
  protected initials = this.p.name.split(' ').map(w => w[0]).join('');
  protected go(e: Event, id: string): void { e.preventDefault(); this.scroll.scrollTo(id); }
}
