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

import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";
import { Entypo } from "@expo/vector-icons";
import { createTodo } from "../store/actions/todo.action";
import { useDispatch } from "react-redux";

const CreateTodoModalContent = ({ modalRef }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleSubmitTodo = () => {
    if (title.trim().length === 0 || description.trim().length === 0) {
      Alert.alert("Form Error", "Please check the form");
    } else {
      dispatch(createTodo(title, description, 3)); //hardcoded user_id
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
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Description</Text>
        <CustomInput
          value={description}
          onChange={setDescription}
          placeholder={"Enter the description"}
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
});
