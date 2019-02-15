import { all, takeLatest } from 'redux-saga/effects';

import { Types as CityTypes } from '../ducks/cities';
import { addCityWeather } from './cities';

export default function* rootSaga() {
  yield all([takeLatest(CityTypes.ADD_REQUEST, addCityWeather)]);
}
