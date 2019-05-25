import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {CoursesModule} from './courses/courses.module';
import {LayoutModule} from './layout/layout.module';
import {reducers} from './reducers';
import {storageMetaReducer} from './storage-metareducer';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    LayoutModule,
    CoursesModule,
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers, {metaReducers: [storageMetaReducer]}),
    AppRoutingModule,
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
