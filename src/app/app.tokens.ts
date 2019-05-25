import {InjectionToken} from '@angular/core';

export const ROOT_STORAGE_KEYS = new InjectionToken<string[]>('StorageKeys');
export const LOCAL_STORAGE_KEY = new InjectionToken<string[]>('LocalStorageKey');
