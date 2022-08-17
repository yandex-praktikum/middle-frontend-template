import { USER, GET_THEME, UPDATE_THEME } from '../types';
const initialState = {
  id: 0,
  baseTheme: true,
  email: '',
  first_name: '',
  second_name: '',
  display_name: '',
  phone: '',
  login: '',
  avatar: '',
  loading: true,
};

export const reducer = (state = initialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case USER:
      return {
        ...payload,
        loading: false,
      };
    case UPDATE_THEME:
      return {
        ...state,
        loading: false,
      };
    case GET_THEME:
      return {
        ...state,
        baseTheme: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
