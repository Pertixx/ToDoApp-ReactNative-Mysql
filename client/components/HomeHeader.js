import { COLORS, SIZES } from "../constants";
import { StyleSheet, Text, View } from "react-native";

import { Feather } from "@expo/vector-icons";
import PlusButton from "./PlusButton";
import React from "react";

const HomeHeader = () => {
  const handleOnPress = () => {
    console.log("Pressed");
  };

  return (
    <View style={styles.container}>
      <View style={styles.userIconContainer}>
        <Feather name="user" size={SIZES.icon} color={COLORS.white2} />
      </View>
      <View style={styles.buttonsContainer}>
        <PlusButton onPress={handleOnPress} />
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: SIZES.padding,
  },
  userIconContainer: {
    backgroundColor: COLORS.gray,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "100%",
    padding: SIZES.padding,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
});
