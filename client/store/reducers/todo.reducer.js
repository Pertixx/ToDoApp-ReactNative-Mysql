import {
  CREATE_TODO,
  GET_TODOS_BY_ID,
  TOGGLE_COMPLETED,
} from "../actions/todo.action";

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
    case TOGGLE_COMPLETED:
      console.log(`Payload id ${action.payload}`);
      state.todos.map((todo) =>
        todo.id === action.payload
          ? todo.completed === 0
            ? (todo.completed = 1)
            : (todo.completed = 0)
          : null
      );

      return { ...state };
    case CREATE_TODO:
      return state;
    default:
      return state;
  }
};

export default TodoReducer;
