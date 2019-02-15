import { call, put } from 'redux-saga/effects';
import moment from 'moment';
import api from '../../services/api';

import { Creators as CityActions } from '../ducks/cities';

moment.locale('pt-br');

export function* addCityWeather(action) {
  const { cityData } = action.payload;
  const [lat, lon] = cityData.coords;
  try {
    const { data } = yield call(api.get, `/current?lat=${lat}&lon=${lon}`);
    return yield put(
      CityActions.addCitySuccess({
        temp: data.main.temp,
        temp_min: data.main.temp_min,
        temp_max: data.main.temp_max,
        humidity: data.main.humidity,
        name: data.name,
        datetime: moment().format('ddd, DD de MMM de YYYY'),
      }),
    );
  } catch (err) {
    yield put(CityActions.addCityFailure('Error ao se comunicar com a api'));
    return false;
  }
}
