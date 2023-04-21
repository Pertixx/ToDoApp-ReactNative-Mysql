import { COLORS, SIZES } from "../../constants";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import CustomButton from "../CustomButton";
import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { toggleCompleted } from "../../store/actions/todo.action";

const TodoCard = ({ id, title, description, created_at, navigation }) => {
  const dispatch = useDispatch();
  const completed = useSelector((state) => {
    const todo = state.TodoReducer.todos.find((item) => item.id === id);
    return todo.completed;
  });

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Todo", {
          title: title,
          completed: completed,
          id: id,
          description: description,
          creationDate: created_at,
        })
      }
      style={[
        styles.container,
        completed === 0
          ? { backgroundColor: COLORS.purple2 }
          : { backgroundColor: COLORS.yellow },
      ]}
    >
      {completed === 0 ? (
        <FontAwesome5 name="circle" size={24} color="black" />
      ) : (
        <FontAwesome5 name="check-circle" size={24} color="black" />
      )}
      <Text
        numberOfLines={1}
        style={[
          styles.title,
          completed === 0 ? { color: COLORS.gray } : { color: COLORS.black },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default TodoCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.yellow,
    marginTop: SIZES.padding,
    alignItems: "center",
    padding: SIZES.padding * 1.5,
    borderRadius: SIZES.padding,
    flexDirection: "row",
  },
  title: {
    fontSize: SIZES.h2,
    fontWeight: "bold",
    width: "100%",
    paddingLeft: SIZES.padding,
  },
});
