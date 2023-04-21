import { COLORS, SIZES } from "../../constants";
import { StyleSheet, Text, View } from "react-native";

import React from "react";
import { useSelector } from "react-redux";

const ListHeader = () => {
  const todos = useSelector((state) => state.TodoReducer.todos);

  return (
    <View style={styles.container}>
      <View style={styles.taskCount}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: SIZES.padding,
          }}
        >
          {todos.length}
        </Text>
      </View>
      <Text
        style={{
          fontSize: SIZES.h1,
          color: COLORS.lightLime,
        }}
      >
        Tasks
      </Text>
    </View>
  );
};

export default ListHeader;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: SIZES.padding,
    marginTop: SIZES.padding,
    flexDirection: "row",
    alignItems: "center",
  },
  taskCount: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.white,
    width: SIZES.width * 0.12,
    borderRadius: SIZES.padding,
    height: SIZES.padding * 2,
    marginRight: SIZES.padding,
  },
});
