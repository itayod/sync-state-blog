import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {SetActiveTheme} from './actions/layout.actions';
import {APP_THEMES, AppTheme} from './app.model';
import * as fromReducer from './reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sync-state-blog';
  appThemes = APP_THEMES;


  public activeTheme$: Observable<AppTheme>;

  constructor(private store: Store<fromReducer.State>) {}

  public ngOnInit(): void {
    this.activeTheme$ = this.store.select(fromReducer.getActiveTheme);
  }

  public themeSelected(theme: AppTheme) {
    this.store.dispatch(new SetActiveTheme(theme));
  }
}
