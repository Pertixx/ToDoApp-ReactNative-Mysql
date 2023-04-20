import { COLORS, SIZES } from "../../constants";
import { StyleSheet, View } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import CustomButton from "../CustomButton";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
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
        <CustomButton
          onPress={handleOnPress}
          icon={
            <Ionicons
              name="notifications-outline"
              size={SIZES.icon}
              color={COLORS.white2}
            />
          }
          customStyles={{
            backgroundColor: COLORS.purple2,
            padding: SIZES.padding,
            borderRadius: "100%",
          }}
        />
        <CustomButton
          onPress={handleOnPress}
          icon={
            <AntDesign name="plus" size={SIZES.icon} color={COLORS.white2} />
          }
          customStyles={{
            backgroundColor: COLORS.purple2,
            padding: SIZES.padding,
            borderRadius: "100%",
          }}
        />
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
    justifyContent: "space-between",
    width: "29%",
  },
});
