import {SET_NOTES, NOTES_ERROR} from '../actions/action.type';

const initialState = {
  notes: null,
  error: false,
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_NOTES:
      return {
        ...state,
        notes: action.payload,
        isLoading: false,
      };
    case NOTES_ERROR:
      return {
        ...state,
        error: true,
        isLoading: false,
      };
    default:
      return state;
  }
};
