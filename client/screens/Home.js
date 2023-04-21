import Animated, {
  SlideInDown,
  SlideInUp,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
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
import ListHeader from "../components/HomeComponents/ListHeader";
import React from "react";
import TodoCard from "../components/TodoComponents/TodoCard";
import { useSelector } from "react-redux";

const Home = ({ navigation }) => {
  const todos = useSelector((state) => state.TodoReducer.todos);
  const headerOpacity = useSharedValue(1);
  const headerVisibility = useSharedValue(0);

  const animatedHeaderStyle = useAnimatedStyle(() => ({
    opacity: headerOpacity.value,
    marginBottom: interpolate(
      headerOpacity.value,
      [0, 1],
      [-SIZES.padding * 3.5, 0]
    ),
  }));

  const handler = useAnimatedScrollHandler({
    onScroll: (event) => {
      const y = event.contentOffset.y;
      if (y < 10) {
        //Here we should have the header opened
        headerOpacity.value = withTiming(1);
      } else {
        //Close the header
        headerOpacity.value = withTiming(0);
      }
    },
  });

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
      <ListHeader animatedStyle={animatedHeaderStyle} />
      <Animated.FlatList
        data={todos}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => renderItem(item)}
        onScroll={handler}
        scrollEventThrottle={16}
        ListFooterComponent={
          <View style={{ marginTop: SIZES.bottomTabHeight }} />
        }
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
