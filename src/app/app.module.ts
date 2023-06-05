import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterLayoutComponent } from './components/master-layout/master-layout.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    MasterLayoutComponent,
    LoginPageComponent,
    DashboardComponent,
    ProfileComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
