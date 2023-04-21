import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { COLORS, SIZES } from "../../constants";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { useSelector } from "react-redux";

const CompleteButton = ({ onPress, customStyles, id }) => {
  const completed = useSelector((state) => {
    const todo = state.TodoReducer.todos.find((item) => item.id === id);
    return todo.completed;
  });
  const initialValue = completed === 0 ? -SIZES.width / 2.6 : SIZES.width / 2.6;
  const buttonPosition = useSharedValue(initialValue);

  const animatedButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: buttonPosition.value }],
    };
  });

  const handleOnPress = () => {
    buttonPosition.value < 0
      ? (buttonPosition.value = withTiming(SIZES.width / 2.6))
      : (buttonPosition.value = withTiming(-SIZES.width / 2.6));

    onPress();
  };

  return (
    <View style={[styles.container, customStyles]}>
      <Animated.View style={[styles.buttonContainer, animatedButtonStyle]}>
        <TouchableOpacity
          onPress={() => handleOnPress()}
          style={[
            styles.button,
            completed === 0
              ? { backgroundColor: COLORS.gray2 }
              : { backgroundColor: COLORS.yellow },
          ]}
        >
          {completed === 0 ? (
            <AntDesign name="check" size={24} color="black" />
          ) : (
            <AntDesign name="close" size={24} color="black" />
          )}
        </TouchableOpacity>
      </Animated.View>
      <Text
        style={{
          fontWeight: "bold",
          color: COLORS.gray4,
        }}
      >
        {completed === 0 ? "Set as completed" : "Set as pending"}
      </Text>
    </View>
  );
};

export default CompleteButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.purple2,
    height: SIZES.bottomTabHeight + SIZES.padding,
    alignItems: "center",
    borderRadius: SIZES.padding * 3,
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonContainer: {
    position: "absolute",
  },
  button: {
    width: SIZES.bottomTabHeight + (SIZES.padding - 5),
    height: SIZES.bottomTabHeight + (SIZES.padding - 5),
    borderRadius: SIZES.bottomTabHeight,
    alignItems: "center",
    justifyContent: "center",
  },
});
