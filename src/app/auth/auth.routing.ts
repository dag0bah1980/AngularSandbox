import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AuthComponent } from './auth.component';
import { AuthhomeComponent } from './authhome/authhome.component';

const authRouterConfig: Routes = [
    { path: '', component: AuthComponent, pathMatch: 'full' }
  ];

export const authRouting: ModuleWithProviders = RouterModule.forChild(authRouterConfig);

