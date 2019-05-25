import {Component, Input, EventEmitter, Output} from '@angular/core';
import {Course, ViewModes} from '../courses.model';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent {

  public cols: number;

  @Input() courses: Course[];
  @Input() set viewModes(viewModes: ViewModes) {
    this.cols = viewModes === ViewModes.SingleCol ? 1 : 2;
  }

  @Output() toggleFavourite = new EventEmitter<Course>();

}
