import { Component, inject, signal } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';

/** Sticky top bar with section links and a mobile menu. */
@Component({
  selector: 'app-navbar',
  template: `
    <nav class="nav" aria-label="Main">
      <div class="container">
        <a class="brand" href="#home" (click)="go($event, 'home')">Uzair Dor</a>
        <button class="burger" (click)="open.set(!open())" [attr.aria-expanded]="open()" aria-label="Toggle menu">{{ open() ? '✕' : '☰' }}</button>
        <ul [class.open]="open()">
          @for (l of links; track l.id) {
            <li><a [href]="'#' + l.id" [class.active]="scroll.active() === l.id" (click)="go($event, l.id)">{{ l.label }}</a></li>
          }
        </ul>
      </div>
    </nav>`,
})
export class NavbarComponent {
  protected scroll = inject(ScrollService);
  protected open = signal(false);
  protected links = [
    { id: 'about', label: 'About' }, { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' }, { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' }, { id: 'contact', label: 'Contact' },
  ];

  protected go(e: Event, id: string): void {
    e.preventDefault();
    this.open.set(false);
    this.scroll.scrollTo(id);
  }
}
