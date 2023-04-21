import { COLORS, SIZES } from "../../constants";
import { StyleSheet, Text, View } from "react-native";

import Animated from "react-native-reanimated";
import React from "react";
import { useSelector } from "react-redux";

const ListHeader = ({ animatedStyle }) => {
  const todos = useSelector((state) => state.TodoReducer.todos);

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
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
    </Animated.View>
  );
};

export default ListHeader;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: SIZES.padding,
    marginTop: SIZES.padding + 2,
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
