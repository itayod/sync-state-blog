import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {LocalStorageService} from '../local-storage.service';
import {MaterialModule} from '../material.module';
import {storageMetaReducer} from '../storage-metareducer';
import {CoursesRoutingModule} from './courses-routing.module';
import {CoursesComponent} from './courses.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import {COURSES_LOCAL_STORAGE_KEY, COURSES_STORAGE_KEYS, COURSES_CONFIG_TOKEN} from './courses.tokens';
import * as fromReducer from './reducers/courses.reducer';

export function getCoursesConfig(saveKeys: string[], localStorageKey: string, storageService: LocalStorageService) {
    return {metaReducers: [storageMetaReducer(saveKeys, localStorageKey, storageService)]};
}

@NgModule({
    declarations: [CoursesComponent, CoursesListComponent],
    imports: [
        MaterialModule,
        CommonModule,
        ReactiveFormsModule,
        StoreModule.forFeature('courses', fromReducer.reducer, COURSES_CONFIG_TOKEN),
        CoursesRoutingModule
    ],
    providers: [
        LocalStorageService,
        {provide: COURSES_LOCAL_STORAGE_KEY, useValue: '__courses_storage__'},
        {provide: COURSES_STORAGE_KEYS, useValue: ['courses', 'viewMode']},
        {provide    : COURSES_CONFIG_TOKEN,
            deps      : [COURSES_STORAGE_KEYS, COURSES_LOCAL_STORAGE_KEY, LocalStorageService],
            useFactory: getCoursesConfig
        },
    ]
})
export class CoursesModule {}
