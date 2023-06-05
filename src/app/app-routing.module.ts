import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { MasterLayoutComponent } from './components/master-layout/master-layout.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    {
      path : '', component:MasterLayoutComponent,
      children:[
        {
          path:'dashboard',component:DashboardComponent
        },
        {
          path:'profile',component:ProfileComponent
        }
      ]
  },
    {path : 'login', component:LoginPageComponent},
    {path : 'register', component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
