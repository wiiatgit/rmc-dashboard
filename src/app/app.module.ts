import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_INITIALIZER } from '@angular/core';
import { AppConfig } from '../config/app.config';

// Ngrx
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducers } from './state/app.state';

// ngx translation
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// Environnement
import { environment } from '../environments/environment.prod';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HttpClient } from '@angular/common/http';
import { OverlayContainer } from '@angular/cdk/overlay';
import { HttpModule } from '@angular/http';
import { UserEffects } from './features/user/state/user.effects';
import { FeaturesModule } from './features/features.module';
import { PagesModule } from './pages/pages.module';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { CustomSerializer } from './shared/utils/custom-serializer';
import { fakeBackendProvider } from './shared/utils/fake-backend-provider';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

export function initializeApp(appConfig: AppConfig) {
  return () => appConfig.load();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    FeaturesModule,
    PagesModule,
    SharedModule,
    AppRoutingModule,
    EffectsModule.forRoot([UserEffects]),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      name: 'Frogular Dashboard',
      maxAge: 25,
      logOnly: environment.production
    }),
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    }),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router'
    })
  ],
  providers: [
    AppConfig,
    { provide: APP_INITIALIZER, useFactory: initializeApp, deps: [AppConfig], multi: true },
    { provide: RouterStateSerializer, useClass: CustomSerializer},
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    overlayContainer: OverlayContainer,
  ) {
    overlayContainer.getContainerElement().classList.add('default-theme');
  }
}
