import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './user-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserComponent } from './user.component';

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UsersRoutingModule,
  ]
})
export class UserModule { }
