import { Action } from '@ngrx/store';
import {Course, ViewModes} from '../courses.model';

export enum CoursesActionTypes {
  ToggleFavourite = '[Courses] Toggle Favourite',
  SwitchViewMode = '[Courses] Switch View Mode',
}

export class ToggleFavourite implements Action {
  readonly type = CoursesActionTypes.ToggleFavourite;

  constructor(public payload: Course) {}
}

export class SwitchViewMode implements Action {
  readonly type = CoursesActionTypes.SwitchViewMode;

  constructor(public payload: ViewModes) {}
}


export type CoursesActions = ToggleFavourite | SwitchViewMode;
