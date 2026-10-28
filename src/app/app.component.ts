import { AfterViewInit, Component, inject } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { ScrollService } from './services/scroll.service';

/** Root component: assembles the page, then starts tracking the active section. */
@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    EducationComponent,
    ProjectsComponent,
    ContactComponent,
  ],
  template: `
    <app-navbar />
    <main>
      <app-hero />
      <app-about />
      <app-skills />
      <app-experience />
      <app-education />
      <app-projects />
      <app-contact />
    </main>
    <footer class="footer">© {{ year }} Uzair Dor. Built with Angular.</footer>
  `,
})
export class AppComponent implements AfterViewInit {
  private scroll = inject(ScrollService);
  protected year = new Date().getFullYear();

  ngAfterViewInit(): void {
    this.scroll.observe(['home', 'about', 'skills', 'experience', 'education', 'projects', 'contact']);
  }
}
