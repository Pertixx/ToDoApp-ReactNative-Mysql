import { COLORS, SIZES } from "../constants";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import React from "react";

const PlusButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <AntDesign name="plus" size={SIZES.icon} color={COLORS.white2} />
    </TouchableOpacity>
  );
};

export default PlusButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.purple2,
    padding: SIZES.padding,
    borderRadius: "100%",
  },
});
