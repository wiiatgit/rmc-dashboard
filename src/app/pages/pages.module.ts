import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';

// Import Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { PagesRoutingModule } from './pages-routing.module';

library.add(fas, far);

@NgModule({
  declarations: [
    PageNotFoundComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
