import {Action} from '@ngrx/store';
import {storageMetaReducer} from './storage-metareducer';
import Spy = jasmine.Spy;

export class LocalStorageServiceMock {

  storage = {};

  constructor() {}

  setSavedState(state: any, localStorageKey: string) {
    this.storage[localStorageKey] = state;
  }

  getSavedState(localStorageKey: string): any {
    return this.storage[localStorageKey];
  }
}


fdescribe('storage meta reducer', () => {

  const localStorageKey = '__state__';

  let localStorageServiceMock: LocalStorageServiceMock;
  let setStateSpy: Spy;

  let state;
  let fakeReducer

  beforeEach(() => {
    localStorageServiceMock = new LocalStorageServiceMock();
    setStateSpy = spyOn(localStorageServiceMock, 'setSavedState').and.callThrough();
    state = {
      feature: {foo: 'bar'},
      nestedFeature: {foo: {bar: 'baz'}}
    };
    fakeReducer = function(s = state, a): any {
      switch (a.type) {
        case 'SET': {
          return {...a.state};
        }
        default:
          return s;
      }
    };
  })

  it('should simply return the state', () => {
    const metaReducer = storageMetaReducer(['feature'], localStorageKey, localStorageServiceMock);
    const higherOrder = metaReducer(fakeReducer);
    const initialState = higherOrder(state, {type: 'INIT'});
    expect(initialState).toEqual(state);
  });

  it('should return the saved state', () => {
    const savedState = {
      feature: {foo: 'bazz'},
      nestedFeature: {foo: {bar: 'baz'}}
    };
    localStorageServiceMock.setSavedState(savedState, localStorageKey);
    const metaReducer = storageMetaReducer([], localStorageKey, localStorageServiceMock);
    const higherOrder = metaReducer(fakeReducer);
    const initialState = higherOrder(state, {type: 'INIT'});
    expect(initialState).toEqual(savedState);
  });

  it('should merge the saved state with the initial state and override the initial state value', () => {
    const savedState = {
      feature: {foo: 'bazz'}
    };
    localStorageServiceMock.setSavedState(savedState, localStorageKey);
    const metaReducer = storageMetaReducer([], localStorageKey, localStorageServiceMock);
    const higherOrder = metaReducer(fakeReducer);
    const initialState = higherOrder(state, {type: 'INIT'});
    const expected = {
      feature: {foo: 'bazz'},
      nestedFeature: {foo: {bar: 'baz'}}
    };
    expect(initialState).toEqual(expected);
  });

  it('should save configured key', () => {
    const metaReducer = storageMetaReducer(['feature'], localStorageKey, localStorageServiceMock);
    const higherOrder = metaReducer(fakeReducer);
    higherOrder(state, {type: 'INIT'});
    higherOrder(state, {type: 'NOOP'});
    expect(setStateSpy).toHaveBeenCalledWith({feature: {foo: 'bar'}}, localStorageKey);
  });

  it('should save configured nested key', () => {
    state = {
      feature: {foo: 'bar'},
      nestedFeature: {foo: {bar: 'baz', baz: 'bar'}}
    };
    const metaReducer = storageMetaReducer(['nestedFeature.foo.baz'], localStorageKey, localStorageServiceMock);
    const higherOrder = metaReducer(fakeReducer);
    higherOrder(state, {type: 'INIT'});
    higherOrder(state, {type: 'NOOP'});
    expect(setStateSpy).toHaveBeenCalledWith({nestedFeature: {foo: {baz: 'bar'}}}, localStorageKey);
  });

});
