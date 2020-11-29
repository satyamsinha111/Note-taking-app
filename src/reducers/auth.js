import {SET_USER, IS_AUTHENTICATED} from '../actions/action.type';

const initialState = {
  user: null,
  isLoading: false,
  isAuthenticated: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };
    case IS_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
