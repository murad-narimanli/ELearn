import {
  SET_USER_ERROR,
  LOADING_ON,
  LOADING_OFF,
  SET_USER_LOGGED_IN,
  LOG_OUT,
  TOGGLE
} from "./../types";
import admin from "./../../const/api";
import history from "./../../const/history";

export const getUserData = () => async (dispatch) => {
  dispatch({ type: LOADING_ON });
  await admin
      .get("users/2")
      .then((res) => {
        if (localStorage.getItem('access_token')){
          dispatch({
            type: SET_USER_LOGGED_IN,
            payload: res.data,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: LOG_OUT,
        });
      })
      .finally(() => {
        dispatch({ type: LOADING_OFF });
      });
};

export const logInUser = (e, p) => async (dispatch) => {
  if (e.trim().length === 0 ||   p.trim().length === 0) {
    dispatch({
      type: SET_USER_ERROR,
      payload: { message: "İstifadəçi adı və şifrə daxil edilməlidir" },
    });
  } else {
    dispatch({ type: LOADING_ON });
    await admin
      .post(`login` , {
        email:e , password:p
      })
      .then((res) => {
        localStorage.setItem("access_token", res.data.token);
        dispatch(getUserData());
        history.push("/");
      })
      .catch((error) => {
        dispatch({
          type: SET_USER_ERROR,
          payload: { message: "İstifadəçi adı və ya şifrə yanlışdır" },
        });
      })
      .finally(() => {
        dispatch({ type: LOADING_OFF });
      });
  }
};

export const toggleLoading = (payload) => ({
  type: payload ? LOADING_ON : LOADING_OFF,
});

export const logOut = () => ({
  type: LOG_OUT,
});

export const toggleMenu = () => {
  return {
    type: TOGGLE
  }
}
