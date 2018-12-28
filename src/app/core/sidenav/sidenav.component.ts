import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import * as fromUserSelectors from '../../features/user/state/user.selectors';
import { IUserProfil } from 'src/app/features/user/user.model';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/state/app.state';

@Component({
  selector: 'fgl-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @ViewChild('userInfoPanel') userInfoPanel;
  isUserInfoPanelOpened = false;
  currentUser$: Observable<IUserProfil> = this.store.pipe(select(fromUserSelectors.getUserProfil));

  constructor(
    private translate: TranslateService,
    private store: Store<IAppState>
  ) { }

  ngOnInit() {
  }

  toggleUserInfoPanel(): void {
    this.isUserInfoPanelOpened = !this.isUserInfoPanelOpened;
    this.userInfoPanel.toggle();
  }
}
