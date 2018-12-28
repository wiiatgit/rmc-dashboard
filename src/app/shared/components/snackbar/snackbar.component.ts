import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { MatSnackBar } from '@angular/material';
import { IAppState } from '../../../state/app.state';
import { getError, getSuccess } from './state/snackbar.selectors';
import * as fromSnackbarActions from './state/snackbar.actions';
import {
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
  MatSnackBarConfig
} from '@angular/material';

@Component({
  selector: 'fgl-snackbar',
  template: '',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit, OnDestroy {
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(
    public snackBar: MatSnackBar,
    private store: Store<IAppState>
  ) { }

  ngOnInit() {
    this.store.pipe(select(getError)).subscribe((err: string) => {
      if (err) {
        const config = new MatSnackBarConfig();
        config.verticalPosition = this.verticalPosition;
        config.horizontalPosition = this.horizontalPosition;
        config.panelClass = 'snackbar-error';
        // config.duration = 5000;
        this.snackBar.open(err, 'Fermer', config);
        this.snackBar._openedSnackBarRef.afterDismissed().subscribe(() => {
          this.store.dispatch(new fromSnackbarActions.ResetSnackbarErrorAction);
        });
      }
    });

    this.store.pipe(select(getSuccess)).subscribe((err: string) => {
      if (err) {
        const config = new MatSnackBarConfig();
        config.verticalPosition = this.verticalPosition;
        config.horizontalPosition = this.horizontalPosition;
        config.panelClass = 'snackbar-success';
        config.duration = 3000;
        this.snackBar.open(err, 'Fermer', config);
        this.snackBar._openedSnackBarRef.afterDismissed().subscribe(() => {
          this.store.dispatch(new fromSnackbarActions.ResetScnackbarSuccessAction);
        });
      }
    });
  }

  ngOnDestroy(): void {
  }
}
