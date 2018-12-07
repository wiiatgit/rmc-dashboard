import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../../state/app.state';
import * as fromUiActions from '../../state/ui/ui.actions';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import * as fromUiSelectors from '../../state/ui/ui.selectors';
import { LoginService } from 'src/app/pages/login/login.service';

@Component({
  selector: 'rmc-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  @Input() sidenav: any;
  themeList = ['default', 'dark'];
  currentTheme$: Observable<string> = this.store.pipe(select(fromUiSelectors.getThemeState));

  constructor(
    private store: Store<IAppState>,
    public translate: TranslateService,
    private loginServices: LoginService
  ) { }

  ngOnInit() {
  }

  toggleSidenav(): void {
    this.sidenav.toggle();
  }

  changeTheme(theme: string): void {
    localStorage.setItem('theme', theme);
    this.store.dispatch(new fromUiActions.ChangeThemeAction(theme));
  }

  ChangeLanguage(language: string): void {

    localStorage.setItem('currentLanguage', language);
    this.store.dispatch(new fromUiActions.ChangeLanguageAction(language));
  }

  logout(): void {
    this.loginServices.logout();
  }
}
