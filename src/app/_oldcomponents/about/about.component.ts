import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { SectionComponent } from '../section/section.component';

@Component({
  selector: 'app-about',
  imports: [SectionComponent],
  template: `
    <app-section id="about" title="About me" [alt]="true">
      <p style="max-width: 75ch">{{ p.summary }}</p>
      <h3 style="margin: 1.8rem 0 .8rem; font-size: 1.05rem">Languages</h3>
      <ul class="chips">@for (l of p.languages; track l) { <li class="chip">{{ l }}</li> }</ul>
    </app-section>`,
})
export class AboutComponent { protected p = inject(PortfolioService).data.profile; }
