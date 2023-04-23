import { COLORS, SIZES } from "../constants";
import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { BottomSheetModal } from "@gorhom/bottom-sheet";
import CompleteButton from "../components/TodoComponents/CompleteButton";
import InfoSection from "../components/TodoComponents/InfoSection";
import ShareTodoModalContent from "../components/TodoComponents/ShareTodoModalContent";
import TodoHeader from "../components/TodoComponents/TodoHeader";
import { toggleCompleted } from "../store/actions/todo.action";

const Todo = ({ navigation, route }) => {
  const { title, id, completed, description, creationDate } = route.params;
  const dispatch = useDispatch();
  const bottomSheetModalRef = useRef(null);
  const snapPoints = ["60%"];
  const sharedTodos = useSelector((state) => state.TodoReducer.sharedTodos);
  const [alreadyShared, setAlreadyShared] = useState(false);

  useEffect(() => {
    sharedTodos.map((sharedTodo) =>
      sharedTodo.todo_id === id ? setAlreadyShared(true) : null
    );
  }, [sharedTodos]);

  const handleCompleted = () => {
    dispatch(toggleCompleted(id, completed));
  };

  return (
    <SafeAreaView style={styles.container}>
      <TodoHeader
        navigation={navigation}
        modalRef={bottomSheetModalRef}
        todoId={id}
      />
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
      <BottomSheetModal
        ref={bottomSheetModalRef}
        snapPoints={snapPoints}
        backgroundStyle={{
          backgroundColor: COLORS.purple3,
          borderRadius: SIZES.padding * 2,
          borderWidth: 4,
          borderColor: COLORS.black,
        }}
        handleIndicatorStyle={{ backgroundColor: COLORS.white }}
      >
        <ShareTodoModalContent
          id={id}
          title={title}
          shared={alreadyShared}
          modalRef={bottomSheetModalRef}
        />
      </BottomSheetModal>
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
