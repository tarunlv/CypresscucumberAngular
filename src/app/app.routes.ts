import { Routes } from '@angular/router';
import { AboutComponent } from './components/about.component';
import { ComponentsComponent } from './components/components.component';
import { DashboardComponent } from './components/dashboard.component';
import { FeaturesComponent } from './components/features.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'components', component: ComponentsComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'about', component: AboutComponent },
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: '**', redirectTo: 'dashboard' },
];
