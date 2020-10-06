import { AUTH_ACTIION_TYPES } from "./AuthAction";

const initialState = {
  isAuthenticated: false,
  user: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case AUTH_ACTIION_TYPES.ON_LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.user,
      };
    case AUTH_ACTIION_TYPES.ON_NEW_PASSWORD :
      return {
        ...state,
        isAuthenticated : true,
        user : action.newUser
      }
    case AUTH_ACTIION_TYPES.ON_LOGOUT :
      return {
        ...state,
        isAuthenticated : false,
        user : {}
      }
    default:
      return state;
  }
}
