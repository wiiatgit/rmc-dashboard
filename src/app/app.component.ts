import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from './state/app.state';
import * as fromUiSelectors from './state/ui/ui.selectors';
import * as fromUiActions from './state/ui/ui.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'rmc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  theme$: Observable<string> = this.store.pipe(select(fromUiSelectors.getThemeState));
  lang$: Observable<string>;

  constructor(
    private translate: TranslateService,
    private store: Store<IAppState>,
  ) {

    //#region Language
    this.translate.addLangs(['en', 'fr']);
    this.translate.setDefaultLang('fr');

    const browserLang = this.translate.getBrowserLang();
    let paramLang = localStorage.getItem('currentLanguage');

    if (!paramLang) {
      paramLang = browserLang.match(/en|fr/) ? browserLang : 'fr';
    }

    this.store.dispatch(new fromUiActions.ChangeLanguageAction(paramLang));

    this.lang$ = this.store.pipe(select(fromUiSelectors.getLanguageState));
    //#endregion
  }

  ngOnInit(): void {
    this.store.dispatch(new fromUiActions.LoadThemeAction);
    this.lang$.subscribe(lang => this.translate.use(lang));
  }
}
