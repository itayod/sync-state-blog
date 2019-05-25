import {InjectionToken} from '@angular/core';
import {StoreConfig} from '@ngrx/store/src/store_module';
import * as fromReducer from './reducers/courses.reducer';
import * as fromActions from './actions/courses.actions';

export const COURSES_STORAGE_KEYS = new InjectionToken<keyof fromReducer.State[]>('CoursesStorageKeys');
export const COURSES_LOCAL_STORAGE_KEY = new InjectionToken<string[]>('CoursesStorage');
export const COURSES_CONFIG_TOKEN = new InjectionToken<StoreConfig<fromReducer.State, fromActions.CoursesActions>>('CoursesConfigToken');
