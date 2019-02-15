import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { nextCitySuccess, previousCitySuccess } from '../actions/cities';

export function* nextCity(action) {
  let wheatherData;
  try {
    wheatherData = yield call(api.get, '/current?lat=-27.593500&lon=-48.558540');
  } catch (err) {
    yield put(nextCitySuccess({ status: err.response.status }));
    return false;
  }

  const response = {
    ...wheatherData.data,
    status: 200,
  };

  return yield put(nextCitySuccess(response));
}

export function* previousCity(action) {
  const { cityData } = action.payload;
  if (!cityData.data.main) {
    const [lat, lon] = cityData.coords;
    let wheatherData;
    try {
      wheatherData = yield call(api.get, `/current?lat=${lat}&lon=${lon}`);
    } catch (err) {
      yield put(previousCitySuccess({ status: err.response.status }));
      return false;
    }

    const response = {
      ...wheatherData.data,
      status: 200,
    };

    return yield put(previousCitySuccess(response));
  }
  return yield put(previousCitySuccess({ ...cityData, status: 200 }));
}
