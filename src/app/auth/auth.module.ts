import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { DragDropModule } from '@angular/cdk/drag-drop';

import { ReactiveFormsModule } from '@angular/forms';

//pipes
import { TimedatePipe } from './pipes/timedate.pipe';

//routing
import { authRouting } from './auth.routing';


//sitelayout
import { SideNavBarComponent } from './_sitelayout/side-nav-bar/side-nav-bar.component';
import { TopInfoBarComponent } from './_sitelayout/top-info-bar/top-info-bar.component';
import { MainContentAreaComponent } from './_sitelayout/main-content-area/main-content-area.component';
import { SiteFooterComponent } from './_sitelayout/site-footer/site-footer.component';
import { SideControlBarHiddenComponent } from './_sitelayout/side-control-bar-hidden/side-control-bar-hidden.component';
import { MainContentHeaderComponent } from './_sitelayout/main-content-area/main-content-header/main-content-header.component';
import { MainContentFooterComponent } from './_sitelayout/main-content-area/main-content-footer/main-content-footer.component';
import { BreadCrumbComponent } from './_sitelayout/main-content-area/main-content-header/bread-crumb/bread-crumb.component';
import { MainContentTitleComponent } from './_sitelayout/main-content-area/main-content-header/main-content-title/main-content-title.component';

//Guards
import { AuthGuard } from '../core/auth.guard';


//views
import { AuthhomeComponent } from './views/authhome/authhome.component';
import { NotesComponent } from './views/notes/notes.component';
import { SimpleTodoComponent } from './views/simple-todo/simple-todo.component';
import { LowSecurityComponent } from './views/low-security/low-security.component';
import { HighSecurityComponent } from './views/high-security/high-security.component';
import { MixedSecurityOnContentComponent } from './views/mixed-security-on-content/mixed-security-on-content.component';
import { TimeWidgetComponent } from './_sitelayout/top-info-bar/time-widget/time-widget.component';
import { SecuritymgmtComponent } from './views/securitymgmt/securitymgmt.component';
import { FirestoresampleComponent } from './views/firestoresample/firestoresample.component';
import { ReadFirestoreRecordComponent } from './views/read-firestore-record/read-firestore-record.component';
import { CreateFirestoreRecordComponent } from './views/create-firestore-record/create-firestore-record.component';
import { UpdateFirestoreRecordComponent } from './views/update-firestore-record/update-firestore-record.component';
import { DeletePermFirestoreRecordComponent } from './views/delete-perm-firestore-record/delete-perm-firestore-record.component';
import { DeleteLogicalFirestoreRecordComponent } from './views/delete-logical-firestore-record/delete-logical-firestore-record.component';
import { ReadFirestoreRecordLookupComponent } from './views/read-firestore-record-lookup/read-firestore-record-lookup.component';
import { StyleguideComponent } from './views/styleguide/styleguide.component';
import { StandardviewsetupComponent } from './views/standardviewsetup/standardviewsetup.component';

//PrimeNG
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { EditorModule } from 'primeng/editor';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ChipsModule } from 'primeng/chips';
import { TooltipModule } from 'primeng/tooltip';

import { DatasetupComponent } from './views/datasetup/datasetup.component';
import { DatasetupsampleComponent } from './views/datasetupsample/datasetupsample.component';
import { DatasetuplistsampleComponent } from './views/datasetuplistsample/datasetuplistsample.component';
import { PrioritiesComponent } from './views/priorities/priorities.component';
import { SeveritiesComponent } from './views/severities/severities.component';
import { BadgeUserComponent } from './_uiwidgets/badge-user/badge-user.component';
import { BadgeDateComponent } from './_uiwidgets/badge-date/badge-date.component';



@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    authRouting,
    FormsModule,
    //PrimeNG
    PasswordModule,
    CheckboxModule,
    CalendarModule,
    DropdownModule,
    InputTextModule,
    TableModule,
    SidebarModule,
    ButtonModule,
    EditorModule,
    MultiSelectModule,
    DragDropModule,
    InputTextareaModule,
    ChipsModule,
    TooltipModule
  ],
  declarations: [
    AuthComponent,
    AuthhomeComponent,
    SideNavBarComponent,
    TopInfoBarComponent,
    MainContentAreaComponent,
    SiteFooterComponent,
    SideControlBarHiddenComponent,
    MainContentHeaderComponent,
    MainContentFooterComponent,
    NotesComponent,
    SimpleTodoComponent,
    LowSecurityComponent,
    HighSecurityComponent,
    MixedSecurityOnContentComponent,
    BreadCrumbComponent,
    MainContentTitleComponent,
    TimedatePipe,
    TimeWidgetComponent,
    SecuritymgmtComponent,
    FirestoresampleComponent,
    ReadFirestoreRecordComponent,
    CreateFirestoreRecordComponent,
    UpdateFirestoreRecordComponent,
    DeletePermFirestoreRecordComponent,
    DeleteLogicalFirestoreRecordComponent,
    ReadFirestoreRecordLookupComponent,
    StyleguideComponent,
    StandardviewsetupComponent,
    DatasetupComponent,
    DatasetupsampleComponent,
    PrioritiesComponent,
    SeveritiesComponent,
    DatasetuplistsampleComponent,
    BadgeUserComponent,
    BadgeDateComponent,

  ],
  providers: [
    AuthGuard
  ]
})
export class AuthModule { }
