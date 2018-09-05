import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';

import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

//routing
import { authRouting } from './auth.routing';
import { AuthhomeComponent } from './authhome/authhome.component';



@NgModule({
  imports: [
    CommonModule,
    authRouting
  ],
  declarations: [
    AuthComponent,
    AuthhomeComponent,
  ]
})
export class AuthModule { }
