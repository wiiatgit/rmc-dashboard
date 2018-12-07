import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsfeedRoutingModule } from './newsfeed-routing.module';
import { NewsfeedComponent } from './newsfeed.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    NewsfeedComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NewsfeedRoutingModule,
  ]
})
export class NewsfeedModule { }
