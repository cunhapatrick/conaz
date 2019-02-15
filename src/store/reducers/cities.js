const INITIAL_STATE = {
  loading: false,
  data: [],
};

export default function cities(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'NEXT_CITY_REQUEST':
      return { ...state, loading: true };

    case 'NEXT_CITY_SUCCESS':
      return {
        ...state,
        loading: false,
        data: [...state.data, action.payload.data],
      };

    case 'PREVIOUS_CITY_REQUEST':
      return { ...state, loading: true };

    case 'PREVIOUS_CITY_SUCCESS':
      return {
        ...state,
        loading: false,
        data: [...state.data, action.payload.data],
      };

    default:
      return state;
  }
}
