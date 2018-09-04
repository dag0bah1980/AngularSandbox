import { Routes } from '@angular/router';

import { LoginComponent } from './anon/login/login.component';


export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
];