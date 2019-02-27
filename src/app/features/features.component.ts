import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import * as fromUiSelectors from '../state/ui/ui.selectors';
import * as fromUserActions from './user/state/user.actions';
import * as fromUiActions from '../state/ui/ui.actions';

@Component({
  selector: 'fgl-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeaturesComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(map(result => result.matches));
  // isSidenavOpened$: Observable<boolean> = this.store.pipe(select(fromUiSelectors.getSidenavState));

  constructor(
    private breakpointObserver: BreakpointObserver,
    private store: Store<IAppState>,
  ) { }

  ngOnInit() {
    this.store.dispatch(new fromUserActions.LoadUserProfilAction);
  }

  sidenavToggle(isOpen: boolean) {
    this.store.dispatch(new fromUiActions.ToggleSidenavAction(isOpen));
  }

  sidenavClose(): void {
    // this.store.dispatch(new fromUiActions.ToggleSidenavAction(false));
  }

  sidenavOpen(): void {
    // this.store.dispatch(new fromUiActions.ToggleSidenavAction(true));
  }
}
