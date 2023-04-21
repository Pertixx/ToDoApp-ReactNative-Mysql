export const GET_TODOS_BY_ID = "GET_TODOS_BY_ID";
export const CREATE_TODO = "CREATE_TODO";
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED";

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
