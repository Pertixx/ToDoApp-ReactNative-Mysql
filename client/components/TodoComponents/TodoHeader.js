import { COLORS, SIZES } from "../../constants";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import CustomButton from "../CustomButton";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";

const TodoHeader = ({ navigation, modalRef, todoId }) => {
  const sharedTodos = useSelector((state) => state.TodoReducer.sharedTodos);
  const [shareIcon, setShareIcon] = useState(
    <MaterialIcons
      name="ios-share"
      size={SIZES.icon + 5}
      color={COLORS.white}
    />
  );

  useEffect(() => {
    sharedTodos.map((sharedTodo) =>
      sharedTodo.todo_id === todoId
        ? setShareIcon(
            <Feather name="users" size={SIZES.icon} color={COLORS.white} />
          )
        : null
    );
  }, [sharedTodos]);

  return (
    <View style={styles.container}>
      <CustomButton
        onPress={() => {
          modalRef.current?.close();
          navigation.goBack();
        }}
        icon={
          <Ionicons
            name="caret-back-outline"
            size={SIZES.icon + 5}
            color={COLORS.white}
          />
        }
      />
      <Text style={styles.title}>Details</Text>
      <CustomButton
        onPress={() => modalRef.current?.present()}
        icon={shareIcon}
      />
    </View>
  );
};

export default TodoHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: SIZES.padding,
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: SIZES.padding,
  },
  title: {
    fontWeight: "bold",
    color: COLORS.white2,
    fontSize: SIZES.h2,
  },
});
