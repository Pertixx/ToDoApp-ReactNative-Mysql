import { COLORS, SIZES } from "../constants";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import CompleteButton from "../components/TodoComponents/CompleteButton";
import InfoSection from "../components/TodoComponents/InfoSection";
import React from "react";
import TodoHeader from "../components/TodoComponents/TodoHeader";
import { toggleCompleted } from "../store/actions/todo.action";
import { useDispatch } from "react-redux";

const Todo = ({ navigation, route }) => {
  const { title, id, completed, description, creationDate } = route.params;
  const dispatch = useDispatch();

  const handleCompleted = () => {
    console.log("toggle completed");
    dispatch(toggleCompleted(id, completed));
  };

  return (
    <SafeAreaView style={styles.container}>
      <TodoHeader navigation={navigation} />
      <InfoSection
        title={title}
        description={description}
        creationDate={creationDate}
      />
      <CompleteButton
        onPress={handleCompleted}
        customStyles={styles.completeButton}
        completed={completed}
        id={id}
      />
    </SafeAreaView>
  );
};

export default Todo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.purple,
  },
  completeButton: {
    position: "absolute",
    top: SIZES.height / 1.2,
    left: SIZES.padding,
    right: SIZES.padding,
  },
});
