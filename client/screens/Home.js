import { COLORS, SIZES } from "../constants";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

import HomeBanner from "../components/HomeComponents/HomeBanner";
import HomeHeader from "../components/HomeComponents/HomeHeader";
import React from "react";
import TodoCard from "../components/TodoComponents/TodoCard";
import { useSelector } from "react-redux";

const Home = ({ navigation }) => {
  const todos = useSelector((state) => state.TodoReducer.todos);

  const renderItem = (todo) => {
    return (
      <View style={{ marginHorizontal: SIZES.padding }}>
        <TodoCard title={todo.title} completed={todo.completed} />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <HomeHeader />
      <HomeBanner />
      <FlatList
        data={todos}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => renderItem(item)}
      />
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
