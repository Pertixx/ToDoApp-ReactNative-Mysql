import Animated, { BounceIn, FadeOut } from "react-native-reanimated";
import { COLORS, SIZES } from "../../constants";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import CustomButton from "../CustomButton";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { deleteTodo } from "../../store/actions/todo.action";

const TodoCard = ({ id, title, description, created_at, navigation }) => {
  const dispatch = useDispatch();
  const [deleteIsActive, setDeleteIsActive] = useState(false);
  const completed = useSelector((state) => {
    const todo = state.TodoReducer.todos.find((item) => item.id === id);
    return todo.completed;
  });

  const handleDelete = () => {
    dispatch(deleteTodo(id));
    setDeleteIsActive(false);
  };

  return (
    <TouchableOpacity
      onLongPress={() => setDeleteIsActive(!deleteIsActive)}
      onPress={() => {
        setDeleteIsActive(false);
        navigation.navigate("Todo", {
          title: title,
          completed: completed,
          id: id,
          description: description,
          creationDate: created_at,
        });
      }}
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
      {deleteIsActive && (
        <Animated.View
          style={styles.deleteButtonContainer}
          entering={BounceIn.duration(300)}
          exiting={FadeOut.duration(300)}
        >
          <CustomButton
            icon={<MaterialIcons name="delete" size={24} color="black" />}
            onPress={handleDelete}
            customStyles={styles.deleteButton}
          />
        </Animated.View>
      )}
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
  deleteButtonContainer: {
    position: "absolute",
    left: "105%",
    top: "-30%",
  },
  deleteButton: {
    backgroundColor: COLORS.white,
    width: SIZES.padding * 2.5,
    height: SIZES.padding * 2.5,
    borderRadius: SIZES.bottomTabHeight,
    borderWidth: 2,
  },
});
