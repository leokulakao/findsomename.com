import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// module
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// component
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

// authSandbox
import { AuthSandbox } from './core/auth/auth.sandbox';
import { AuthService } from './core/auth/auth.service';
import { AuthEffects } from './core/auth/effects/auth.effect';
import { metaReducers, reducers } from './core/reducer.interface';


@NgModule({
    declarations: [
        AppComponent,
        LoginPageComponent,
        HomePageComponent
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
        ]),
        StoreRouterConnectingModule.forRoot()
    ],
    providers: [
        AuthSandbox,
        AuthService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
