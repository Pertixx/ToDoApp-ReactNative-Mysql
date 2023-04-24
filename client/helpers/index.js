export const getUserById = async (id) => {
  const response = await fetch(`http://192.168.0.9:8080/users/${id}`);
  const data = await response.json();

  return data;
};
