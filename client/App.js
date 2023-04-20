import { StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";

import { StatusBar } from "expo-status-bar";

export default function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("http://localhost:8080/todos/1");
    const data = await response.json();
    setTodos(data);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
