import { COLORS, SIZES } from "../../constants";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import CustomButton from "../CustomButton";
import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";

const TodoCard = ({ title, completed }) => {
  const toggleCompleted = () => {
    console.log("toggle completed");
  };

  return (
    <TouchableOpacity
      style={[
        styles.container,
        completed === 0
          ? { backgroundColor: COLORS.purple2 }
          : { backgroundColor: COLORS.yellow },
      ]}
    >
      <CustomButton
        onPress={toggleCompleted}
        icon={
          completed === 0 ? (
            <FontAwesome5 name="circle" size={24} color="black" />
          ) : (
            <FontAwesome5 name="check-circle" size={24} color="black" />
          )
        }
      />
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
