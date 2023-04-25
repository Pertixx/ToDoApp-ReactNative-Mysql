import {
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { COLORS, SIZES } from "../constants";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";
import { Entypo } from "@expo/vector-icons";
import { createTodo } from "../store/actions/todo.action";

const CreateTodoModalContent = ({ modalRef }) => {
  const user = useSelector((state) => state.UserReducer.user);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleSubmitTodo = () => {
    if (title.trim().length === 0 || description.trim().length === 0) {
      Alert.alert("Form Error", "Please check the form");
    } else {
      dispatch(createTodo(title, description, user.id));
      setTitle("");
      setDescription("");
      modalRef.current?.close();
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Text style={styles.title}>Create your ToDo</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Title</Text>
        <CustomInput
          value={title}
          onChange={setTitle}
          placeholder={"Enter the title"}
          customStyles={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Description</Text>
        <CustomInput
          value={description}
          onChange={setDescription}
          placeholder={"Enter the description"}
          customStyles={styles.input}
        />
      </View>
      <CustomButton
        customStyles={styles.submitButton}
        icon={<Entypo name="plus" size={24} color="black" />}
        onPress={handleSubmitTodo}
      />
    </KeyboardAvoidingView>
  );
};

export default CreateTodoModalContent;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: SIZES.padding,
    flex: 1,
  },
  title: {
    fontWeight: "bold",
    alignSelf: "center",
    fontSize: SIZES.h3,
    color: COLORS.white,
  },
  label: {
    fontWeight: "bold",
    color: COLORS.gray3,
    fontSize: SIZES.h3,
    marginBottom: SIZES.padding,
  },
  inputContainer: {
    marginBottom: SIZES.padding,
  },
  submitButton: {
    backgroundColor: COLORS.white,
    position: "absolute",
    bottom: SIZES.bottomTabHeight,
    alignSelf: "center",
    width: SIZES.bottomTabHeight,
    height: SIZES.bottomTabHeight,
    borderRadius: SIZES.bottomTabHeight,
  },
  input: {
    borderWidth: 3,
    borderColor: COLORS.lightGray2,
    padding: SIZES.padding - 5,
    borderRadius: SIZES.padding * 1.2,
    color: COLORS.white,
  },
});
