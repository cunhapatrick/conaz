import { call, put } from 'redux-saga/effects';
import 'moment/locale/pt-br';
import moment from 'moment';
import api from '../../services/api';

import { Creators as CityActions } from '../ducks/cities';

export function* addCityWeather(action) {
  const { cityData } = action.payload;
  const { lat, lon } = cityData;
  try {
    const now = moment();
    now.locale('pt-br');
    const { data } = yield call(api.get, `/current?lat=${lat}&lon=${lon}`);
    const datetime = `${now.format('dddd, DD ')}
    de ${now.format('MMMM')} de ${now.format('YYYY')}`;

    const res = {
      temp: Math.round(data.main.temp),
      tempMin: Math.round(data.main.temp_min),
      tempMax: Math.round(data.main.temp_max),
      humidity: Math.round(data.main.humidity),
      name: data.name,
      datetime,
    };

    return yield put(CityActions.addCitySuccess(res));
  } catch (err) {
    yield put(CityActions.addCityFailure('Error ao se comunicar com a api'));
    return false;
  }
}
