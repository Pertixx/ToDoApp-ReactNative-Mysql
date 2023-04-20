export const GET_TODOS_BY_ID = "GET_TODOS_BY_ID";
export const CREATE_TODO = "CREATE_TODO";

export const getTodosById = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:8080/todos/${id}`);
      const data = await response.json();
      console.log(data);

      dispatch({
        type: GET_TODOS_BY_ID,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
