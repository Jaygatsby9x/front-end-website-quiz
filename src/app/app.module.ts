import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UserLoginComponent} from './users/user-login/user-login.component';
import {UserRegisterComponent} from './users/user-register/user-register.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {DashboardComponent} from './admin/dashboard/dashboard.component';
import {OverviewComponent} from './admin/overview/overview.component';
import {AskComponent} from './admin/ask/ask.component';
import {CreateAskComponent} from './admin/ask/create-ask/create-ask.component';
import {HomePageComponent} from './home/home-page/home-page.component';
import {CategoryPageComponent} from './category/category-page/category-page.component';
import {NavBarComponent} from './layouts/nav-bar/nav-bar.component';

import {UserProfileComponent} from './users/user-profile/user-profile.component';
import {UserResultTestsComponent} from './users/user-result-tests/user-result-tests.component';
import {UserInfoComponent} from './users/user-info/user-info.component';
import {UseEditComponent} from './users/use-edit/use-edit.component';
import {UseChangePasswordComponent} from './users/use-change-password/use-change-password.component';
import {QuizListComponent} from './quiz-list/quiz-list.component';
import {QuizComponent} from './admin/quiz/quiz.component';
import {CreateQuizComponent} from './admin/quiz/create-quiz/create-quiz.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {FamousPeopleComponent} from './famous-people/famous-people.component';
import {QuizDetailUserComponent} from './quiz-detail-user/quiz-detail-user.component';
import {ContactComponent} from './contact/contact.component';
import {AskDetailsComponent} from './admin/ask/ask-details/ask-details.component';
import {CategoriesComponent} from './admin/categories/categories.component';
import {CreateCategoryComponent} from './admin/categories/create-category/create-category.component';
import {AskEditComponent} from './admin/ask/ask-edit/ask-edit.component';

import {EditQuizComponent} from './admin/quiz/edit-quiz/edit-quiz.component';

import {NotfoundComponent} from './notfound/notfound.component';
import { ResultQuizComponent } from './quiz-detail-user/result-quiz/result-quiz.component';
import { UsersComponent } from './admin/users/users.component';
import { QuizStatisticComponent } from './admin/quiz-statistic/quiz-statistic.component';
import { UserDetailComponent } from './admin/users/user-detail/user-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserRegisterComponent,
    HomePageComponent,
    CategoryPageComponent,
    DashboardComponent,
    OverviewComponent,
    AskComponent,
    CreateAskComponent,
    HomePageComponent,
    NavBarComponent,

    UserProfileComponent,
    UserResultTestsComponent,
    UserInfoComponent,
    UseEditComponent,
    UseChangePasswordComponent,

    QuizListComponent,
    QuizComponent,
    CreateQuizComponent,
    ContactComponent,
    FamousPeopleComponent,
    QuizDetailUserComponent,
    AskDetailsComponent,
    CategoriesComponent,
    CreateCategoryComponent,
    AskEditComponent,

    EditQuizComponent,

    NotfoundComponent,
    ResultQuizComponent,
    UsersComponent,

    QuizStatisticComponent,

    UserDetailComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
