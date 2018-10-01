import {NgModule} from '@angular/core';
/**
 * Modules
 */
import {SharedModule} from '../shared/shared.module';
/**
 * Components
 */
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProgressComponent} from './progress/progress.component';
import {Graphics1Component} from './graphics1/graphics1.component';
import {PagesComponent} from './pages.component';
import {PAGES_ROUTES} from './pages.routes';

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graphics1Component,
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graphics1Component,
    PagesComponent,
  ],
  imports: [
    SharedModule,
    PAGES_ROUTES,
  ],
})
export class PagesModule {}