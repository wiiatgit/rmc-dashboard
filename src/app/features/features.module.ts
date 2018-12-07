import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { CoreModule } from '../core/core.module';
import { FeaturesComponent } from './features.component';
import { SharedModule } from '../shared/shared.module';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from '../core/interceptors/jwt.interceptor';
import { ErrorInterceptor } from '../core/interceptors/error.interceptor';
@NgModule({
  declarations: [
    FeaturesComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    FeaturesRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ]
})
export class FeaturesModule { }
