import { all, takeLatest } from 'redux-saga/effects';

import { nextCity, previousCity } from './cities';

export default function* rootSaga() {
  yield all([
    takeLatest('NEXT_CITY_REQUEST', nextCity),
    takeLatest('PREVIOUS_CITY_REQUEST', previousCity),
  ]);
}
