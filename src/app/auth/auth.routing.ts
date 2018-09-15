import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AuthComponent } from './auth.component';

import { AuthhomeComponent } from './views/authhome/authhome.component';
import { NotesComponent } from './views/notes/notes.component';
import { SimpleTodoComponent } from './views/simple-todo/simple-todo.component';
import { LowSecurityComponent } from './views/low-security/low-security.component';
import { HighSecurityComponent } from './views/high-security/high-security.component';
import { MixedSecurityOnContentComponent } from './views/mixed-security-on-content/mixed-security-on-content.component';


import { AuthGuard } from '../core/auth.guard';

const authRouterConfig: Routes = [
    { 
      path: '', 
      component: AuthComponent,
      data: {
        breadcrumb: "Home",
        pagetitle: "Home Page - Page Title",
        subtitle: "a little subtitle"
      },
        children: [
          { path: 'home', component: AuthhomeComponent,
              data: {
                pagetitle: "Home Page - Page Title",
                subtitle: "a little subtitle"
              }
          },
          { path: 'notes', component: NotesComponent,
              data: {
                breadcrumb: "Notes",
                pagetitle: "Notes - Page Title",
                subtitle: "a note subtitle"
              }
          },
          { path: 'simpletodo', component: SimpleTodoComponent,
              data: {
                breadcrumb: "Simple Todo",
                pagetitle: "Simple todo",
                subtitle: "a todo subtitle"
              }
          },
          { path: 'lowsecurity', component: LowSecurityComponent, canActivate: [AuthGuard],
              data: {
                breadcrumb: "Low Security",
                pagetitle: "low security page",
                subtitle: "a lowsecurity subtitle"
              }
          },
          { path: 'highsecurity', component: HighSecurityComponent,
              data: {
                breadcrumb: "High Security",
                pagetitle: "high security page",
                subtitle: "a highsecurity subtitle"
              }
          },
          { path: 'mixedsecurity', component: MixedSecurityOnContentComponent,
              data: {
                breadcrumb: "Mixed Security",
                pagetitle: "mixed security",
                subtitle: "a mixed security subtitle"
              }
          },
          { path: '', redirectTo: 'home'
          },
        ] 
    }
  ];

export const authRouting: ModuleWithProviders = RouterModule.forChild(authRouterConfig);

