import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { ModalModule } from 'angular-modal-library';

// component
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';

// authSandbox
import { AuthSandbox } from './core/auth/auth.sandbox';
import { AuthService } from './core/auth/auth.service';
import { AuthEffects } from './core/auth/effects/auth.effect';

// namesSandbox
import { NamesSandbox } from './core/names/names.sandbox';
import { NamesService } from './core/names/names.service';
import { NamesEffects } from './core/names/effects/names.effect';

// labelSandbox
import { LabelSandbox } from './core/label/label.sandbox';
import { LabelService } from './core/label/label.service';
import { LabelEffects } from './core/label/effects/label.effect';

// linkSandbox
import { LinkSandbox } from './core/link/link.sandbox';
import { LinkService } from './core/link/link.service';
import { LinkEffects } from './core/link/effects/link.effect';

import { metaReducers, reducers } from './core/reducer.interface';
// interceptor
import { TokenInterceptor } from './shared/token.interceptor';
import { ErrorUnauthorizedInterceptor } from './shared/errorUnauthorized.interceptor';
import { SearchPageComponent } from './search-page/search-page.component';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { LinkPageComponent } from './link-page/link-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';



@NgModule({
    declarations: [
        AppComponent,
        LoginPageComponent,
        HomePageComponent,
        RegisterPageComponent,
        SearchPageComponent,
        MainLayoutComponent,
        DashboardPageComponent,
        LinkPageComponent,
        NotFoundPageComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgxPaginationModule,
        ModalModule,
        StoreModule.forRoot(reducers, { metaReducers }),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
        EffectsModule.forRoot([
            AuthEffects,
            NamesEffects,
            LabelEffects,
            LinkEffects
        ]),
        StoreRouterConnectingModule.forRoot()
    ],
    providers: [
        AuthSandbox,
        AuthService,
        NamesSandbox,
        NamesService,
        LabelSandbox,
        LabelService,
        LinkSandbox,
        LinkService,
        {
            provide: HTTP_INTERCEPTORS,
            multi: true,
            useClass: TokenInterceptor
        },
        {
            provide: HTTP_INTERCEPTORS,
            multi: true,
            useClass: ErrorUnauthorizedInterceptor
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
