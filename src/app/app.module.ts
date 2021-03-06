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
import {ResultQuizComponent} from './quiz-detail-user/result-quiz/result-quiz.component';
import {UsersComponent} from './admin/users/users.component';
import {QuizStatisticComponent} from './admin/quiz-statistic/quiz-statistic.component';
import {UserDetailComponent} from './admin/users/user-detail/user-detail.component';
import {QuizDetailStComponent} from './admin/quiz-statistic/quiz-detail-st/quiz-detail-st.component';
import {ForbidenComponent} from './forbiden/forbiden.component';
import {UserStatisticFilterComponent} from './admin/users/user-statistic-filter/user-statistic-filter.component';
import {UserStatisticComponent} from './admin/users/user-statistic/user-statistic.component';
import {UserStatisticFilterByTimeComponent} from './admin/users/user-statistic-filter-by-time/user-statistic-filter-by-time.component';

import {EditCategoryComponent} from './admin/categories/edit-category/edit-category.component';

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatOptionModule} from '@angular/material/core';
import {EditUserComponent} from './admin/users/edit-user/edit-user.component';
import {FacebookLoginComponent} from './facebook-login/facebook-login.component';
import {SocialLoginModule, AuthServiceConfig} from 'angularx-social-login';
import {GoogleLoginProvider, FacebookLoginProvider} from 'angularx-social-login';
import {ToastrModule} from 'ngx-toastr';
import { VerifyEmailComponent } from './verify/verify-email/verify-email.component';
import { RecaptchaComponent } from './recaptcha/recaptcha.component';
import {NgxCaptchaModule} from "ngx-captcha";

const configSocialite = new AuthServiceConfig([
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('2229701507322130')
  }
]);

export function provideConfig() {
  return configSocialite;
}

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
    QuizDetailStComponent,
    ForbidenComponent,
    UserStatisticFilterComponent,
    UserStatisticComponent,
    UserStatisticFilterByTimeComponent,
    EditUserComponent,
    EditCategoryComponent,
    FacebookLoginComponent,
    VerifyEmailComponent,
    RecaptchaComponent,

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
    FormsModule,
    MatAutocompleteModule,
    MatOptionModule,
    SocialLoginModule,
    NgxCaptchaModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-right'
    })
  ], providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
