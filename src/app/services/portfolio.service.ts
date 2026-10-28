import { Injectable } from '@angular/core';
import { PORTFOLIO } from '../data/portfolio.data';
import { Portfolio } from '../models/portfolio.model';

/** Single access point for content. Swap for an HttpClient call later if you move content to an API. */
@Injectable({ providedIn: 'root' })
export class PortfolioService {
  readonly data: Portfolio = PORTFOLIO;
}
