import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
      path: '**',
      redirectTo: '/courses'
  },
  {
      path: 'courses',
      loadChildren: './courses/courses.module#CoursesModule',
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
