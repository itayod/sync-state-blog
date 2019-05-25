import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../material.module';
// import {LocalStorageService} from '../shared/local-storage.service';
import {CoursesRoutingModule} from './courses-routing.module';
import {CoursesComponent} from './courses.component';
// import {CourseDialogComponent} from './course-dialog/course-dialog.component';
// import {CourseEffects} from './course.effects';
// import {CoursesCardListComponent} from './courses-card-list/courses-card-list.component';
// import {coursesReducer} from './courses.reducers';
// import {COURSES_STORAGE_KEYS, COURSES_CONFIG_TOKEN} from './courses.tokens';
// import {HomeComponent} from './home/home.component';
// import {CourseResolver} from './services/course.resolver';


@NgModule({
    declarations: [CoursesComponent],
    imports: [
        MaterialModule,
        CommonModule,
        ReactiveFormsModule,
        CoursesRoutingModule
    ]
})
export class CoursesModule {}
