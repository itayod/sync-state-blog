import {createFeatureSelector, createSelector} from '@ngrx/store';
import { CoursesActions, CoursesActionTypes } from '../actions/courses.actions';
import {courses, Course, ViewModes} from '../courses.model';

export interface State {
  courses: Course[];
  viewMode: ViewModes;
}

export const initialState: State = {
  courses,
  viewMode: ViewModes.SingleCol
};

export const state = createFeatureSelector('courses');
export const selectCourses = createSelector(state, (coursesState: State): Course[] => coursesState.courses);
export const selectViewMode = createSelector(state, (coursesState: State): ViewModes => coursesState.viewMode);

export const selectBeginnerCourses = createSelector(
    selectCourses,
    coursesList => coursesList.filter(course => course.category === 'BEGINNER')
);

export const selectAdvancedCourses = createSelector(
    selectCourses,
    coursesList => coursesList.filter(course => course.category === 'ADVANCED')
);


export function reducer(state = initialState, action: CoursesActions): State {
  switch (action.type) {

    case CoursesActionTypes.ToggleFavourite:
      return {...state,
        courses: state.courses.map(c => c.id === action.payload.id ? {...c, favourite: !c.favourite} : c)
      };
    case CoursesActionTypes.SwitchViewMode:
      return {...state, viewMode: action.payload};
    default:
      return state;
  }
}
