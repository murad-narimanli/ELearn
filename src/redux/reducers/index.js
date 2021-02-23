import {
  GET_USER,
  SET_USER,
  SET_USER_ERROR,
  SET_USER_LOGGED_IN,
  LOG_OUT,
  LOADING_OFF,
  LOADING_ON,
  TOGGLE
} from "./../types";

const initialUser = {
  isLoggedIn: false,
  data: {
    role: 5,
  },
  message: "",
  notify: true,
};

export function userReducer(userData = initialUser, action) {
  switch (action.type) {
    case GET_USER:
      return userData;
    case SET_USER_LOGGED_IN:
      let data = {
        avatar: action.payload.data.avatar,
        id: action.payload.data.id,
        firstName: action.payload.data.first_name,
        lastName: action.payload.data.last_name,
        email: action.payload.data.email,
      };
      return {
        data,
        isLoggedIn: true,
        message: "",
        notify: !userData.notify,
      };
    case SET_USER:
      return {
        data: action.payload.data,
        isLoggedIn: true,
        message: "Successfully logged in",
        notify: !userData.notify,
      };
    case SET_USER_ERROR:
      return {
        ...userData,
        message: action.payload.message,
        notify: !userData.notify,
      };
    case LOG_OUT:
      return {
        notify: userData.notify,
        message: "",
        data: {},
        isLoggedIn: false,
      };
    default:
      return userData;
  }
}
export function loaderReducer(isLoading = 0, action) {
  switch (action.type) {
    case LOADING_ON:
      return ++isLoading;
    case LOADING_OFF:
      return isLoading === 0 ? 0 : --isLoading;
    default:
      return isLoading;
  }
}


export const toggleReducer = (data = false, action) =>{
  switch (action.type){
    case TOGGLE:
      return !data;
    default :
      return data;
  }
}
