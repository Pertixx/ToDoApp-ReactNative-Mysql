import { CREATE_TODO, GET_TODOS_BY_ID } from "../actions/todo.action";

const initialState = {
  todos: [],
};

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODOS_BY_ID:
      return {
        ...state,
        todos: action.payload,
      };
    case CREATE_TODO:
      return state;
    default:
      return state;
  }
};

export default TodoReducer;
