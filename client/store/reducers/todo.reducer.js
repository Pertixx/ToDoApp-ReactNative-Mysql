import {
  CREATE_TODO,
  DELETE_TODO,
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
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: todo.completed ? 0 : 1 }
            : todo
        ),
      };
    case CREATE_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};

export default TodoReducer;
