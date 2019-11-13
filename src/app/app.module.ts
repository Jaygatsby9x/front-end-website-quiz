import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './users/user-login/user-login.component';
import { UserRegisterComponent } from './users/user-register/user-register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { OverviewComponent } from './admin/overview/overview.component';
import { AskComponent } from './admin/ask/ask.component';
import { CreateAskComponent } from './admin/ask/create-ask/create-ask.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { CategoryPageComponent } from './category/category-page/category-page.component';
import { NavBarComponent } from './layouts/nav-bar/nav-bar.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';

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
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
