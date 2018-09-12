import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AuthComponent } from './auth.component';

import { AuthhomeComponent } from './views/authhome/authhome.component';
import { NotesComponent } from './views/notes/notes.component';
import { SimpleTodoComponent } from './views/simple-todo/simple-todo.component';
import { LowSecurityComponent } from './views/low-security/low-security.component';
import { HighSecurityComponent } from './views/high-security/high-security.component';
import { MixedSecurityOnContentComponent } from './views/mixed-security-on-content/mixed-security-on-content.component';

const authRouterConfig: Routes = [
    { 
      path: '', 
      component: AuthComponent,
        children: [
          { path: 'home', component: AuthhomeComponent,
              data: {
                breadcrumb: "Home",
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
                breadcrumb: "Simple Todo"
              }
          },
          { path: 'lowsecurity', component: LowSecurityComponent,
              data: {
                breadcrumb: "Low Security"
              }
          },
          { path: 'highsecurity', component: HighSecurityComponent,
              data: {
                breadcrumb: "High Security"
              }
          },
          { path: 'mixedsecurity', component: MixedSecurityOnContentComponent,
              data: {
                breadcrumb: "Mixed Security"
              }
          },
          { path: '', redirectTo: 'home'
          },
        ] 
    }
  ];

export const authRouting: ModuleWithProviders = RouterModule.forChild(authRouterConfig);

