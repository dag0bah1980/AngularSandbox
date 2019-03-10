import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { LoginComponent } from './anon/login/login.component';
import { ConnectApiComponent } from './anon/setup/connect-api.component';

import { AuthGuard } from './core/auth.guard';

//Read This: https://stackoverflow.com/questions/47353218/multiple-modules-and-routing-in-angular-5/47353436
const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'connect', component: ConnectApiComponent, pathMatch: 'full' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule', canActivate: [AuthGuard] },
];

export const rootRouting = RouterModule.forRoot(rootRouterConfig, { useHash: false });