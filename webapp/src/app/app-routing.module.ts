import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { UploadchallengeComponent } from './components/uploadchallenge/uploadchallenge.component';
import { LandingComponent } from './landing/landing.component';
import { SolutionComponent } from './solution/solution.component';


const routes: Routes = [
  {path:'',component:LandingComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'landing',component:LandingComponent},
  {path:'solution',component:SolutionComponent},
  {path:'challenge',component:UploadchallengeComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
