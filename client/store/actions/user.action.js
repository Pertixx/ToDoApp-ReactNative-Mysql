export const SIGN_IN_USER = "SIGN_IN_USER";
export const SIGN_UP_USER = "SIGN_UP_USER";
export const LOG_OUT = "LOG_OUT";

export const getUserByEmailAndPassword = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://192.168.0.9:8080/login", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      const data = await response.json();
      dispatch({
        type: SIGN_IN_USER,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const createUser = (email, username, password) => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://192.168.0.9:8080/users", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          name: username,
          email: email,
          password: password,
        }),
      });
      const data = await response.json();
      dispatch({
        type: SIGN_UP_USER,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const logOut = () => {
  return async (dispatch) => {
    dispatch({
      type: LOG_OUT,
    });
  };
};
