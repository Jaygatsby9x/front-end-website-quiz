import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserLoginComponent} from './users/user-login/user-login.component';
import {UserRegisterComponent} from './users/user-register/user-register.component';
import {DashboardComponent} from './admin/dashboard/dashboard.component';
import {OverviewComponent} from './admin/overview/overview.component';
import {AskComponent} from './admin/ask/ask.component';
import {CreateAskComponent} from './admin/ask/create-ask/create-ask.component';
import {HomePageComponent} from './home/home-page/home-page.component';


const routes: Routes = [
  {path: 'login' , component: UserLoginComponent},
  {path: 'register' , component: UserRegisterComponent},
  {path: 'dashboard', component: DashboardComponent, children: [
      {path: 'overview', component: OverviewComponent},
      {path: '', redirectTo: 'overview', pathMatch: 'full'},
      {path: 'ask', component: AskComponent},
      {path: 'ask/create', component:  CreateAskComponent}
    ]},
  {path: '' , component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
