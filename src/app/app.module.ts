import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

//routing
import { rootRouting } from './app.routing';

//guards
import { AuthGuard } from './core/auth.guard';

//modules
import { AuthModule } from './auth/auth.module';

import { AngularFireModule } from 'angularfire2';
//import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { ReactiveFormsModule } from '@angular/forms';

//services
import { AuthService } from './core/auth.service';




import { AppComponent } from './app.component';
import { LoginComponent } from './anon/login/login.component';
import { ConnectApiComponent } from './anon/setup/connect-api.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ConnectApiComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    rootRouting,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
  ],
  providers: [
    AuthService,
    AuthModule,
    AuthGuard

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
