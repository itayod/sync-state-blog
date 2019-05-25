import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {AppTheme} from '../../app.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() themes: AppTheme[];
  @Output() themeSelected = new EventEmitter<AppTheme>();

  constructor() { }

  ngOnInit() {
  }

}
