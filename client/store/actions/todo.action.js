export const GET_TODOS_BY_ID = "GET_TODOS_BY_ID";
export const CREATE_TODO = "CREATE_TODO";
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED";
export const DELETE_TODO = "DELETE_TODO";
export const SHARE_TODO = "SHARE_TODO";

export const createTodo = (title, description, userId) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`http://192.168.0.9:8080/todos`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          user_id: userId,
          title: title,
          description: description,
        }),
      });
      const data = await response.json();
      console.log(data);
      dispatch({
        type: CREATE_TODO,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteTodo = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`http://192.168.0.9:8080/todos/${id}`, {
        headers: { "Content-Type": "application/json" },
        method: "DELETE",
      });

      const data = await response.json();
      console.log(data);
      dispatch({
        type: DELETE_TODO,
        payload: id,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const shareTodo = (id, user_id, email) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "http://192.168.0.9:8080/todos/shared_todos",
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({
            todo_id: id,
            user_id: user_id,
            email: email,
          }),
        }
      );
      const data = await response.json();
      dispatch({
        type: SHARE_TODO,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getTodosById = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`http://192.168.0.9:8080/todos/${id}`);
      const data = await response.json();

      dispatch({
        type: GET_TODOS_BY_ID,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const toggleCompleted = (id, completed) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`http://192.168.0.9:8080/todos/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify({
          value: completed === 0 ? true : false,
        }),
      });
      const data = await response.json();
      console.log(data);

      dispatch({
        type: TOGGLE_COMPLETED,
        payload: id,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
