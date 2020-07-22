import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

// module
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

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

import { metaReducers, reducers } from './core/reducer.interface';
// interceptor
import { TokenInterceptor } from './shared/token.interceptor';
import { UserPageComponent } from './user-page/user-page.component';



@NgModule({
    declarations: [
        AppComponent,
        LoginPageComponent,
        HomePageComponent,
        RegisterPageComponent,
        UserPageComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        StoreModule.forRoot(reducers, { metaReducers }),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
        EffectsModule.forRoot([
            AuthEffects,
            NamesEffects
        ]),
        StoreRouterConnectingModule.forRoot()
    ],
    providers: [
        AuthSandbox,
        AuthService,
        NamesSandbox,
        NamesService,
        {
            provide: HTTP_INTERCEPTORS,
            multi: true,
            useClass: TokenInterceptor
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
