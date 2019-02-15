const INITIAL_STATE = [];

export default function cities(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'NEXT_CITY':
      return;

    case 'PREVIOUS_CITY':
      return;

    default:
      return state;
  }
}
