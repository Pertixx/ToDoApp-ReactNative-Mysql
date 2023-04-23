import { COLORS, SIZES } from "../../constants";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { useSelector } from "react-redux";

const HomeBanner = () => {
  const today = new Date();
  const currentDate = today.toDateString();
  const todos = useSelector((state) => state.TodoReducer.todos);
  const options = { weekday: "long" };
  const fullDay = today.toLocaleDateString("en-US", options);
  const currentDayName = fullDay.split(",")[0];
  const [percentageCompleted, setPercentageCompleted] = useState(0);

  useEffect(() => {
    getCompletedPercentage();
  }, [todos]);

  const getCompletedPercentage = () => {
    if (todos.length > 0) {
      let amountCompleted = 0;
      todos.map((todo) => todo.completed === 1 && amountCompleted++);
      setPercentageCompleted(
        ((amountCompleted / todos.length) * 100).toFixed(2)
      );
    } else {
      setPercentageCompleted(0);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to your Todos</Text>
      <View style={styles.infoContainer}>
        <View>
          <Text style={styles.infoText}>Today's {currentDayName}</Text>
          <Text style={styles.subText}>{currentDate}</Text>
        </View>
        <View style={{ alignItems: "flex-end" }}>
          <Text style={styles.infoText}>{percentageCompleted}%</Text>
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
