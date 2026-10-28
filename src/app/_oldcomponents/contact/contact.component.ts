import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { SectionComponent } from '../section/section.component';

@Component({
  selector: 'app-contact',
  imports: [SectionComponent],
  template: `
    <app-section id="contact" title="Contact">
      <p class="muted" style="margin: -1rem 0 1.8rem">Have a project in mind or want to talk? Send a message and I will get back to you.</p>
      <div class="contact-list">
        @for (c of items; track c.label) {
          @if (c.href) {
            <a class="card" [href]="c.href" [attr.target]="c.external ? '_blank' : null" rel="noopener"><small>{{ c.label }}</small>{{ c.value }}</a>
          } @else {
            <div class="card"><small>{{ c.label }}</small>{{ c.value }}</div>
          }
        }
      </div>
      <a class="btn primary" [href]="'mailto:' + contact.email">Send an email</a>
    </app-section>`,
})
export class ContactComponent {
  protected contact = inject(PortfolioService).data.contact;
  /** Entries without a value (e.g. GitHub) are skipped automatically. */
  protected items = [
    { label: 'Email', value: this.contact.email, href: 'mailto:' + this.contact.email, external: false },
    { label: 'Phone', value: this.contact.phone, href: 'tel:' + this.contact.phone.replace(/\s/g, ''), external: false },
    { label: 'LinkedIn', value: 'uzair-dor', href: this.contact.linkedin, external: true },
    { label: 'GitHub', value: this.contact.github ?? '', href: this.contact.github ?? '', external: true },
    { label: 'Location', value: this.contact.location, href: '', external: false },
  ].filter(i => i.value);
}
