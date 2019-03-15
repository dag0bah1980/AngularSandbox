import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AuthComponent } from './auth.component';

import { AuthhomeComponent } from './views/authhome/authhome.component';
import { NotesComponent } from './views/notes/notes.component';
import { SimpleTodoComponent } from './views/simple-todo/simple-todo.component';
import { LowSecurityComponent } from './views/low-security/low-security.component';
import { HighSecurityComponent } from './views/high-security/high-security.component';
import { MixedSecurityOnContentComponent } from './views/mixed-security-on-content/mixed-security-on-content.component';
import { SecuritymgmtComponent } from './views/securitymgmt/securitymgmt.component';
import { FirestoresampleComponent } from './views/firestoresample/firestoresample.component';
import { ReadFirestoreRecordComponent } from './views/read-firestore-record/read-firestore-record.component';
import { ReadFirestoreRecordLookupComponent } from './views/read-firestore-record-lookup/read-firestore-record-lookup.component';
import { CreateFirestoreRecordComponent } from './views/create-firestore-record/create-firestore-record.component';
import { UpdateFirestoreRecordComponent } from './views/update-firestore-record/update-firestore-record.component';
import { DeletePermFirestoreRecordComponent } from './views/delete-perm-firestore-record/delete-perm-firestore-record.component';
import { DeleteLogicalFirestoreRecordComponent } from './views/delete-logical-firestore-record/delete-logical-firestore-record.component';

import { StyleguideComponent } from './views/styleguide/styleguide.component';

import { AuthGuard } from '../core/auth.guard';

const authRouterConfig: Routes = [
    { 
      path: '', 
      component: AuthComponent, canActivate: [AuthGuard], 
      data: {
        breadcrumb: "Home",
        pagetitle: "Home Page - Page Title",
        subtitle: "a little subtitle"
      },
        children: [
          { path: 'home', component: AuthhomeComponent, canActivate: [AuthGuard],
              data: {
                pagetitle: "Home Page - Page Title",
                subtitle: "a little subtitle"
              }
          },
          { path: 'notes', component: NotesComponent, canActivate: [AuthGuard],
              data: {
                breadcrumb: "Notes",
                pagetitle: "Notes - Page Title",
                subtitle: "a note subtitle"
              }
          },
          { path: 'simpletodo', component: SimpleTodoComponent, canActivate: [AuthGuard],
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
          { path: 'highsecurity', component: HighSecurityComponent, canActivate: [AuthGuard],
              data: {
                breadcrumb: "High Security",
                pagetitle: "high security page",
                subtitle: "a highsecurity subtitle"
              }
          },
          { path: 'mixedsecurity', component: MixedSecurityOnContentComponent, canActivate: [AuthGuard],
              data: {
                breadcrumb: "Mixed Security",
                pagetitle: "mixed security",
                subtitle: "a mixed security subtitle"
              }
          },
          { path: 'securitymgmt', component: SecuritymgmtComponent, canActivate: [AuthGuard],
              data: {
                breadcrumb: "Security Management",
                pagetitle: "security mgmt",
                subtitle: "a security mgmt subtitle"
              }
          },
          { path: 'styleguide', component: StyleguideComponent, canActivate: [AuthGuard],
              data: {
                breadcrumb: "Style Guide",
                pagetitle: "Style Guide",
                subtitle: "a page to demo the various components used throughout"
              }
          },
          { path: 'firestoresample', component: FirestoresampleComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard],
              data: {
                breadcrumb: "FireStore Sample",
                pagetitle: "firestore sample",
                subtitle: "a firestore sample subtitle"
              },
              
              children: [
                { path: 'CreateFSRecord', component: CreateFirestoreRecordComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard],
                    data: {
                      breadcrumb: "Create",
                      pagetitle: "Create a Firestore Record",
                      subtitle: "subtitle"
                    }
                },
                { path: 'ReadFSRecord', component: ReadFirestoreRecordComponent, canActivate: [AuthGuard],
                    data: {
                      breadcrumb: "Read",
                      pagetitle: "Read a Firestore Record",
                      subtitle: ""
                    }
                },
                { path: 'ReadFSRecordLookup', component: ReadFirestoreRecordLookupComponent, canActivate: [AuthGuard],
                    data: {
                      breadcrumb: "Read - Lookup",
                      pagetitle: "Read a Firestore Record - Lookup",
                      subtitle: ""
                    }
                },
                { path: 'UpdateFSRecord', component: UpdateFirestoreRecordComponent, canActivate: [AuthGuard],
                    data: {
                      breadcrumb: "Update",
                      pagetitle: "Update a Firestore Record",
                      subtitle: ""
                    }
                },
                { path: 'DeletePermFSRecord', component: DeletePermFirestoreRecordComponent, canActivate: [AuthGuard],
                    data: {
                      breadcrumb: "Delete - Permanent",
                      pagetitle: "Permanently Delete a Firestore Record",
                      subtitle: ""
                    }
                },
                { path: 'DeleteLogicalFSRecord', component: DeleteLogicalFirestoreRecordComponent, canActivate: [AuthGuard],
                    data: {
                      breadcrumb: "Delete - Logical",
                      pagetitle: "Logically Delete a Firestore Record",
                      subtitle: ""
                    }
                },
              ]
          },
          { path: '', redirectTo: 'home'
          },
        ] 
    }
  ];

export const authRouting: ModuleWithProviders = RouterModule.forChild(authRouterConfig);

