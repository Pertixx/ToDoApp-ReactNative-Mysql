import { COLORS, SIZES } from "../constants";
import { StyleSheet, TouchableOpacity } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import React from "react";

const CustomButton = ({ onPress, icon, customStyles }) => {
  return (
    <TouchableOpacity
      style={[customStyles, styles.container]}
      onPress={onPress}
    >
      {icon ? (
        icon
      ) : (
        <AntDesign name="antdesign" size={SIZES.icon} color={COLORS.white2} />
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
