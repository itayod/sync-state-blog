import { Action } from '@ngrx/store';
import {AppTheme} from '../app.model';

export enum AppActionTypes {
  SetTheme = '[App] Set Theme'
}

export class SetActiveTheme implements Action {
  readonly type = AppActionTypes.SetTheme;

  constructor(public payload: AppTheme) {}
}

export type AppActions = SetActiveTheme;
