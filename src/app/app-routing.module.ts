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
import {FamousPeopleComponent} from './famous-people/famous-people.component';
import {QuizDetailUserComponent} from './quiz-detail-user/quiz-detail-user.component';
import {AskDetailsComponent} from './admin/ask/ask-details/ask-details.component';
import {CategoriesComponent} from './admin/categories/categories.component';
import {CreateCategoryComponent} from './admin/categories/create-category/create-category.component';
import {AskEditComponent} from './admin/ask/ask-edit/ask-edit.component';
import {EditQuizComponent} from './admin/quiz/edit-quiz/edit-quiz.component';
import {NotfoundComponent} from './notfound/notfound.component';
import {ResultQuizComponent} from './quiz-detail-user/result-quiz/result-quiz.component';
import {UsersComponent} from './admin/users/users.component';
import {QuizStatisticComponent} from './admin/quiz-statistic/quiz-statistic.component';
import {UserDetailComponent} from './admin/users/user-detail/user-detail.component';
import {QuizDetailStComponent} from './admin/quiz-statistic/quiz-detail-st/quiz-detail-st.component';
import {ForbidenComponent} from './forbiden/forbiden.component';
import {AuthorizationGuardGuard} from './authorization-guard.guard';
import {UserStatisticComponent} from './admin/users/user-statistic/user-statistic.component';
import {UserStatisticFilterComponent} from './admin/users/user-statistic-filter/user-statistic-filter.component';
import {UserStatisticFilterByTimeComponent} from './admin/users/user-statistic-filter-by-time/user-statistic-filter-by-time.component';
import {EditCategoryComponent} from './admin/categories/edit-category/edit-category.component';


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
    ], canActivateChild: [AuthGuardService]
  },
  {
    path: 'admin/dashboard', component: DashboardComponent,
    canActivateChild: [AuthGuardService, AuthorizationGuardGuard],
    children: [
      {path: 'overview', component: OverviewComponent},
      {path: '', redirectTo: 'overview', pathMatch: 'full'},
      {path: 'ask', component: AskComponent},
      {path: 'ask/details/:id', component: AskDetailsComponent},
      {path: 'ask/edit/:id', component: AskEditComponent},
      {path: 'ask/create', component: CreateAskComponent},
      {path: 'quiz', component: QuizComponent},
      {path: 'quiz/create', component: CreateQuizComponent},
      {path: 'quiz/:id/edit', component: EditQuizComponent},
      {path: 'categories', component: CategoriesComponent},
      {path: 'categories/create', component: CreateCategoryComponent},
      {path: 'categories/:id/edit', component: EditCategoryComponent},
      {path: 'users', component: UsersComponent},
      {
        path: 'users/:id', component: UserDetailComponent, children: [
          {path: '', component: UserStatisticComponent},
          {path: 'statistic-filter', component: UserStatisticFilterComponent},
          {path: 'statistic-time', component: UserStatisticFilterByTimeComponent}
        ]
      },
      {path: 'quiz-statistic', component: QuizStatisticComponent},
      {path: 'quiz-statistic/:id', component: QuizDetailStComponent},
    ]
  },
  {path: 'categories/:id', component: QuizListComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'famous', component: FamousPeopleComponent},
  {
    path: 'quiz', children: [
      {path: ':id', component: QuizDetailUserComponent},
      {path: ':id/result', component: ResultQuizComponent}]
  },
  {path: 'forbidden', component: ForbidenComponent},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
