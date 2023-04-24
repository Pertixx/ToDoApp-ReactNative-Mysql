import {
  Alert,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { COLORS, SIZES } from "../../constants";
import React, { useEffect, useState } from "react";

import CustomButton from "../CustomButton";
import CustomInput from "../CustomInput";
import { FontAwesome } from "@expo/vector-icons";
import { getUserById } from "../../helpers";
import { shareTodo } from "../../store/actions/todo.action";
import { useDispatch } from "react-redux";

const ShareTodoModalContent = ({
  id,
  modalRef,
  title,
  shared,
  completed,
  sharedWithId,
}) => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const [sharedUserName, setSharedUserName] = useState("");

  const getSharedUserName = async () => {
    const sharedUser = await getUserById(sharedWithId);
    setSharedUserName(sharedUser.name);
  };

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
    getSharedUserName(sharedWithId);
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Shared Tasks</Text>
        <Text style={styles.sharedTaskTitle}>{title}</Text>
        <View
          style={{
            alignItems: "center",
            marginVertical: SIZES.padding,
          }}
        >
          <Text style={styles.label}>Status</Text>
          <View style={styles.box}>
            <Text style={{ fontWeight: "bold" }}>
              {completed === 0 ? "Incompleted" : "Completed"}
            </Text>
          </View>
        </View>
        <View
          style={{
            alignItems: "center",
            marginVertical: SIZES.padding,
          }}
        >
          <Text style={styles.label}>Participants</Text>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <View style={[styles.box, { marginRight: SIZES.padding }]}>
              <Text
                style={{
                  fontWeight: "bold",
                }}
              >
                Agustin
              </Text>
            </View>
            <View style={styles.box}>
              <Text
                style={{
                  fontWeight: "bold",
                }}
              >
                {sharedUserName}
              </Text>
            </View>
          </View>
        </View>
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
  sharedTaskTitle: {
    color: COLORS.yellow,
    fontWeight: "bold",
    fontSize: SIZES.h2,
    alignSelf: "center",
    marginVertical: SIZES.padding * 2,
  },
  box: {
    backgroundColor: COLORS.white,
    padding: SIZES.padding - 4,
    borderRadius: SIZES.padding * 2,
  },
});
