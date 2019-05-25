import {ActionReducerMap, createSelector} from '@ngrx/store';
import {AppTheme} from '../app.model';
import * as fromLayout from './layout.reducer';

export interface State {
  layout: fromLayout.State;
}

export const reducers: ActionReducerMap<State> = {
  layout: fromLayout.reducer
};

export const layout = ((state): fromLayout.State => state.layout);
export const getActiveTheme = createSelector(layout, (state): AppTheme => state.theme);
