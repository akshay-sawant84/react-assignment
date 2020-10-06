export const AUTH_ACTIION_TYPES = {
  ON_LOGIN_SUCCESS: "AUTH/ON_LOGIN_SUCCESS",
  ON_LOGOUT: "AUTH/ON_LOGOUT",
  ON_NEW_PASSWORD: "AUTH/ON_NEW_PASSWORD",
};

export const onLogout = () => {
  return {
    type: AUTH_ACTIION_TYPES.ON_LOGOUT,
  };
};

export const onLoginSuccess = (user) => {
  return {
    type: AUTH_ACTIION_TYPES.ON_LOGIN_SUCCESS,
    user: user,
  };
};

export const onNewPassword = (newUser) => {
  return {
    type: AUTH_ACTIION_TYPES.ON_NEW_PASSWORD,
    newUser: newUser,
  };
};

export const onUserLogout = () => {
  return (dispatch) => {
    dispatch(onLogout());
  };
};

export const onLogin = (data, history) => {
  return (dispatch) => {
    dispatch(onLoginSuccess(data));
    history.push("/home");
  };
};

export const newPassword = (data) => {
  return (dispatch) => {
    dispatch(onNewPassword(data));
  }
}
