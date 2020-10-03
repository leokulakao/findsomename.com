import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { LinkPageComponent } from './link-page/link-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

import { AuthGuard } from './shared/auth.guard';
import { RootGuard } from './shared/root.guard';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import { LabelPageComponent } from './label-page/label-page.component';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomePageComponent },
      { path: 'search', component: SearchPageComponent },
      { path: 'login', component: LoginPageComponent },
      { path: 'register', component: RegisterPageComponent, canActivate: [RootGuard] },
      { path: 'dashboard', component: DashboardPageComponent, canActivate: [AuthGuard] },
      { path: 'link/:id', component: LinkPageComponent },
      { path: 'label/:id_label', component: LabelPageComponent, canActivate: [AuthGuard] },
      { path: '404', component: NotFoundPageComponent},
      { path: '**', component: NotFoundPageComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
