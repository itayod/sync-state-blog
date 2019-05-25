import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Course, ViewModes} from './courses.model';
import * as fromCourses from './reducers/courses.reducer';
import * as fromActions from './actions/courses.actions';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  public viewModes = ViewModes;
  public beginnerCourses$: Observable<Course[]>;
  public advancedCourses$: Observable<Course[]>;
  public viewMode$: Observable<ViewModes>;

  constructor(private store: Store<fromCourses.State>) {}

  public ngOnInit(): void {
    this.beginnerCourses$ = this.store.select(fromCourses.selectBeginnerCourses);
    this.advancedCourses$ = this.store.select(fromCourses.selectAdvancedCourses);
    this.viewMode$ = this.store.select(fromCourses.selectViewMode);
  }

  public toggleFavourite(course: Course) {
    this.store.dispatch(new fromActions.ToggleFavourite(course));
  }

  public switchViewMode(viewMode: ViewModes) {
    this.store.dispatch(new fromActions.SwitchViewMode(viewMode));
  }
}
