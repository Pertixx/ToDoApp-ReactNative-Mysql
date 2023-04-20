import { COLORS, SIZES } from "../constants";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";

import HomeHeader from "../components/HomeHeader";
import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <HomeHeader />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.purple,
  },
});
