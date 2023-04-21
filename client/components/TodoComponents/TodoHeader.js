import { COLORS, SIZES } from "../../constants";
import { StyleSheet, Text, View } from "react-native";

import CustomButton from "../CustomButton";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";

const TodoHeader = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <CustomButton
        onPress={() => {
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
        onPress={() => {
          console.log("Handle share todo");
        }}
        icon={
          <MaterialIcons
            name="ios-share"
            size={SIZES.icon + 5}
            color={COLORS.white}
          />
        }
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
