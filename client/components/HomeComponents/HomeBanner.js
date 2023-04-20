import { COLORS, SIZES } from "../../constants";
import { StyleSheet, Text, View } from "react-native";

import React from "react";
import { useSelector } from "react-redux";

const HomeBanner = () => {
  const currentDate = new Date().toDateString();
  const todos = useSelector((state) => state.TodoReducer.todos);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to your ToDos</Text>
      <View style={styles.infoContainer}>
        <View>
          <Text style={styles.infoText}>Today's Monday</Text>
          <Text style={styles.subText}>{currentDate}</Text>
        </View>
        <View style={{ alignItems: "flex-end" }}>
          <Text style={styles.infoText}>75 % Done</Text>
          <Text style={styles.subText}>Completed Tasks</Text>
        </View>
      </View>
    </View>
  );
};

export default HomeBanner;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: SIZES.padding,
    marginTop: SIZES.padding,
  },
  title: {
    fontWeight: "bold",
    color: COLORS.blue,
    fontSize: SIZES.title,
    marginBottom: SIZES.padding,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  subText: {
    color: COLORS.gray,
    fontWeight: "bold",
  },
  infoText: {
    fontWeight: "bold",
    color: COLORS.white2,
  },
});
