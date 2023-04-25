import { LOG_OUT, SIGN_IN_USER, SIGN_UP_USER } from "../actions/user.action";

const initialState = {
  user: null,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_USER:
      return {
        ...state,
        user: action.payload,
      };
    case SIGN_UP_USER:
      return {
        ...state,
        user: action.payload,
      };
    case LOG_OUT:
      return {
        user: initialState.user,
      };
    default:
      return state;
  }
};

export default UserReducer;
