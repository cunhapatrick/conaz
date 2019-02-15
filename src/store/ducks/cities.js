/**
 * Types
 */

export const Types = {
  ADD_REQUEST: 'cities/ADD_REQUEST',
  ADD_SUCCESS: 'cities/ADD_SUCCESS',
  ADD_FAILURE: 'cities/ADD_FAILURE',
};

/**
 * Reducers
 */

const INITIAL_STATE = {
  loading: false,
  data: [],
};

export default function cities(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return { ...state, loading: true };

    case Types.ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: [...state.data, action.payload.data],
      };

    case Types.ADD_FAILURE:
      return { ...state, loading: false, error: action.payload.error };

    default:
      return state;
  }
}

/**
 * Actions
 */

export const Creators = {
  addCityRequest: cityData => ({
    type: Types.ADD_REQUEST,
    payload: { cityData },
  }),
  addCitySuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data },
  }),
  addCityFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: { error },
  }),
};
