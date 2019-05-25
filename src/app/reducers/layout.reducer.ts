import {createSelector} from '@ngrx/store';
import * as fromActions from '../actions/layout.actions';
import {AppTheme} from '../app.model';

export interface State {
  theme: AppTheme;
}

const initialState: State = {
  theme: {class: 'pink-theme', name: 'pink theme'}
};


export function reducer(state = initialState, action: fromActions.AppActions): State {
  switch (action.type) {
    case fromActions.AppActionTypes.SetTheme:
      return {...state, theme: action.payload};
    default:
      return state;
  }
}
