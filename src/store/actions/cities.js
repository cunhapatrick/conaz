export const nextCityRequest = cityData => ({
  type: 'NEXT_CITY_REQUEST',
  payload: { cityData },
});

export const nextCitySuccess = data => ({
  type: 'NEXT_CITY_SUCCESS',
  payload: { data },
});

export const previousCityRequest = cityData => ({
  type: 'PREVIOUS_CITY_REQUEST',
  payload: { cityData },
});

export const previousCitySuccess = data => ({
  type: 'PREVIOUS_CITY_SUCCESS',
  payload: { data },
});
