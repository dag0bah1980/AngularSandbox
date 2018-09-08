import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';

import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

//routing
import { authRouting } from './auth.routing';
import { AuthhomeComponent } from './authhome/authhome.component';
import { SideNavBarComponent } from './_sitelayout/side-nav-bar/side-nav-bar.component';
import { TopInfoBarComponent } from './_sitelayout/top-info-bar/top-info-bar.component';
import { MainContentAreaComponent } from './_sitelayout/main-content-area/main-content-area.component';
import { SiteFooterComponent } from './_sitelayout/site-footer/site-footer.component';
import { SideControlBarHiddenComponent } from './_sitelayout/side-control-bar-hidden/side-control-bar-hidden.component';
import { MainContentHeaderComponent } from './_sitelayout/main-content-area/main-content-header/main-content-header.component';
import { MainContentFooterComponent } from './_sitelayout/main-content-area/main-content-footer/main-content-footer.component';




@NgModule({
  imports: [
    CommonModule,
    authRouting
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

  ]
})
export class AuthModule { }
