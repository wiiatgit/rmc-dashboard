import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeaturesComponent } from './features.component';
import { AuthGuard } from '../core/auth/auth.guard';

const routes: Routes = [
  { path: 'features', component: FeaturesComponent,
    children: [
      { path: '', redirectTo: 'library', pathMatch: 'full', canActivate: [AuthGuard] },
      { path: 'newsfeed', loadChildren: './newsfeed/newsfeed.module#NewsfeedModule' },
      { path: 'user', loadChildren: './user/user.module#UserModule' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
