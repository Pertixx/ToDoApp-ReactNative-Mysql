import {
  CREATE_TODO,
  DELETE_TODO,
  GET_TODOS_BY_ID,
  SHARE_TODO,
  TOGGLE_COMPLETED,
} from "../actions/todo.action";

const initialState = {
  todos: [],
  sharedTodos: [],
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
    case SHARE_TODO:
      return {
        ...state,
        sharedTodos: [...state.sharedTodos, action.payload],
      };
    default:
      return state;
  }
};

export default TodoReducer;
