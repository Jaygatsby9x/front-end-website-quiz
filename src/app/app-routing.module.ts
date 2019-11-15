import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserLoginComponent} from './users/user-login/user-login.component';
import {UserRegisterComponent} from './users/user-register/user-register.component';
import {DashboardComponent} from './admin/dashboard/dashboard.component';
import {OverviewComponent} from './admin/overview/overview.component';
import {AskComponent} from './admin/ask/ask.component';
import {CreateAskComponent} from './admin/ask/create-ask/create-ask.component';
import {HomePageComponent} from './home/home-page/home-page.component';
import {CategoryPageComponent} from './category/category-page/category-page.component';
import {AuthGuardService} from './services/auth-guard.service';

import {UserProfileComponent} from './users/user-profile/user-profile.component';
import {UserInfoComponent} from './users/user-info/user-info.component';
import {UserResultTestsComponent} from './users/user-result-tests/user-result-tests.component';
import {UseEditComponent} from './users/use-edit/use-edit.component';
import {UseChangePasswordComponent} from './users/use-change-password/use-change-password.component';

import {QuizListComponent} from './quiz-list/quiz-list.component';
import {QuizComponent} from './admin/quiz/quiz.component';
import {CreateQuizComponent} from './admin/quiz/create-quiz/create-quiz.component';
import {ContactComponent} from './contact/contact.component';
import {AskDetailsComponent} from './admin/ask/ask-details/ask-details.component';



const routes: Routes = [
  {path: 'login', component: UserLoginComponent},
  {path: 'register', component: UserRegisterComponent},
  {path: '', component: HomePageComponent},
  {path: 'categories', component: CategoryPageComponent},
  {
    path: 'user', component: UserProfileComponent, children: [
      {path: '', component: UserInfoComponent},
      {path: 'result', component: UserResultTestsComponent},
      {path: 'edit', component: UseEditComponent},
      {path: 'change-password', component: UseChangePasswordComponent}
    ], canActivate: [AuthGuardService]
  },
  {
    path: 'dashboard', component: DashboardComponent, children: [
      {path: 'overview', component: OverviewComponent},
      {path: '', redirectTo: 'overview', pathMatch: 'full'},
      {path: 'ask', component: AskComponent},
      {path: 'ask/details/:id', component: AskDetailsComponent},
      {path: 'ask/create', component: CreateAskComponent},
      {path: 'quiz', component: QuizComponent},
      {path: 'quiz/create', component:  CreateQuizComponent},
    ], canActivate: [AuthGuardService]
  },
  {path: 'quiz-list', component: QuizListComponent},
  {path: 'contact' , component: ContactComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
