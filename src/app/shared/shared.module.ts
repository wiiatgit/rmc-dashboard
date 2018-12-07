import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Import Material Design modules
import {
  MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule,
  MatListModule, MatCardModule, MatFormFieldModule, MatInputModule,
  MatTooltipModule, MatBadgeModule, MatTabsModule, MatSelectModule, MatCheckboxModule,
  MatChipsModule, MatAutocompleteModule, MatDialogModule, MatSnackBarModule, MatSlideToggleModule,
  MatMenuModule, MatExpansionModule, MatTableModule
} from '@angular/material';

// Import Fontawesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LoaderComponent } from './components/loader/loader.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';

library.add(fas, far);

@NgModule({
  declarations: [
    LoaderComponent,
    SnackbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    // Material Design
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatBadgeModule,
    MatTabsModule,
    MatSelectModule,
    MatCheckboxModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatSnackBarModule,
    MatMenuModule,
    MatChipsModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatTableModule,
    // font awesome
    FontAwesomeModule,
    // ngx translate
    TranslateModule,
    // Custom components
    LoaderComponent,
    SnackbarComponent
  ]
})
export class SharedModule { }
