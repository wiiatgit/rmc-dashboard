import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './top-nav/top-nav.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

// Import Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fas, far);

@NgModule({
  declarations: [
    TopNavComponent,
    SidenavComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule
  ],
  exports: [
    TopNavComponent,
    SidenavComponent,
  ]
})
export class CoreModule { }
