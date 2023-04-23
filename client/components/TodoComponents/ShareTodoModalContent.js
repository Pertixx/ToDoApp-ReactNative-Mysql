import {
  Alert,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { COLORS, SIZES } from "../../constants";
import React, { useState } from "react";

import CustomButton from "../CustomButton";
import CustomInput from "../CustomInput";
import { FontAwesome } from "@expo/vector-icons";
import { shareTodo } from "../../store/actions/todo.action";
import { useDispatch } from "react-redux";

const ShareTodoModalContent = ({ id, modalRef, title, shared }) => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const handleShare = () => {
    if (email.trim().length === 0) {
      Alert.alert("Form Error", "Please check the email");
    } else {
      dispatch(shareTodo(id, 1, email)); //hardcoded user_id
      setEmail("");
      modalRef.current?.close();
    }
  };

  if (shared) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Shared Tasks</Text>
      </View>
    );
  }
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Text style={styles.title}>Share this todo</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>
          Email of the person you want to share with
        </Text>
        <CustomInput
          value={email}
          onChange={setEmail}
          keyboardType={"email-address"}
          placeholder={"Enter the email"}
        />
      </View>
      <CustomButton
        customStyles={styles.shareButton}
        icon={
          <FontAwesome name="share" size={SIZES.icon} color={COLORS.black} />
        }
        onPress={handleShare}
      />
    </KeyboardAvoidingView>
  );
};

export default ShareTodoModalContent;

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
    marginVertical: SIZES.padding,
  },
  shareButton: {
    backgroundColor: COLORS.white,
    width: SIZES.bottomTabHeight,
    height: SIZES.bottomTabHeight,
    borderRadius: SIZES.bottomTabHeight,
    alignSelf: "center",
  },
});
