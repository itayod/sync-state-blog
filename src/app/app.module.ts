import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule, META_REDUCERS, MetaReducer} from '@ngrx/store';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {ROOT_STORAGE_KEYS, ROOT_LOCAL_STORAGE_KEY} from './app.tokens';
import {CoursesModule} from './courses/courses.module';
import {LayoutModule} from './layout/layout.module';
import {LocalStorageService} from './local-storage.service';
import {reducers} from './reducers';
import {storageMetaReducer} from './storage-metareducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

// factory meta-reducer configuration function
export function getMetaReducers(saveKeys: string[], localStorageKey: string, storageService: LocalStorageService): MetaReducer<any>[] {
  return [storageMetaReducer(saveKeys, localStorageKey, storageService)];
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    LayoutModule,
    CoursesModule,
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers),
    AppRoutingModule,
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [
    {provide: ROOT_STORAGE_KEYS, useValue: ['layout.theme']},
    {provide: ROOT_LOCAL_STORAGE_KEY, useValue: '__app_storage__'},
    {
      provide   : META_REDUCERS,
      deps      : [ROOT_STORAGE_KEYS, ROOT_LOCAL_STORAGE_KEY, LocalStorageService],
      useFactory: getMetaReducers
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
