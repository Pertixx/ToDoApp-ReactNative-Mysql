import {
  Alert,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { COLORS, SIZES } from "../../constants";
import React, { useState } from "react";

import { BlurView } from "expo-blur";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import { Feather } from "@expo/vector-icons";
import { getUserByEmailAndPassword } from "../../store/actions/user.action";
import { useDispatch } from "react-redux";

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSignIn = () => {
    if (email.trim().length === 0 || password.trim().length === 0) {
      Alert.alert("Form Error", "Please check the form");
    } else {
      dispatch(getUserByEmailAndPassword(email, password));
      setEmail("");
      setPassword("");
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <Image
        source={require("../../assets/auth_background_image.jpeg")}
        style={[styles.backgroundImage, StyleSheet.absoluteFill]}
      />
      <ScrollView contentContainerStyle={styles.scrollViewStyle}>
        <BlurView intensity={25}>
          <View style={styles.signUpContainer}>
            <View>
              <Text style={styles.title}>Hello Again!</Text>
              <Text style={styles.subTitle}>
                Welcome back you've been missed!
              </Text>
            </View>
            <View style={styles.inputsContainer}>
              <View
                style={[
                  styles.inputContainer,
                  { borderBottomWidth: 2, borderColor: COLORS.white },
                ]}
              >
                <Feather name="user" size={SIZES.icon} color={COLORS.white} />
                <CustomInput
                  customStyles={styles.input}
                  value={email}
                  onChange={setEmail}
                  placeholder="Email"
                  keyboardType="email-address"
                />
              </View>
              <View style={styles.inputContainer}>
                <Feather name="lock" size={SIZES.icon} color={COLORS.white} />
                <CustomInput
                  customStyles={styles.input}
                  value={password}
                  onChange={setPassword}
                  placeholder="Password"
                />
              </View>
            </View>
            <View>
              <Text
                style={[styles.subTitle, { alignSelf: "flex-end" }]}
                onPress={() => navigation.navigate("SignUp")}
              >
                You don't have an account? Sign Up
              </Text>
              <CustomButton
                onPress={handleSignIn}
                customStyles={styles.signUpButton}
                icon={
                  <Text
                    style={{
                      color: COLORS.white,
                      fontWeight: "bold",
                      fontSize: SIZES.h3,
                    }}
                  >
                    Sign In
                  </Text>
                }
              />
            </View>
          </View>
        </BlurView>
      </ScrollView>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  scrollViewStyle: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    color: COLORS.white,
    fontSize: SIZES.title,
    alignSelf: "center",
  },
  subTitle: {
    color: COLORS.gray4,
    alignSelf: "center",
    fontSize: SIZES.h3,
  },
  signUpContainer: {
    padding: SIZES.padding,
    width: SIZES.width * 0.95,
    height: SIZES.height / 1.5,
    justifyContent: "space-around",
  },
  inputsContainer: {
    backgroundColor: COLORS.transparentGray,
    borderWidth: 2,
    borderColor: COLORS.white,
    borderRadius: SIZES.padding,
    marginVertical: SIZES.padding * 2,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: SIZES.padding - 5,
  },
  input: {
    padding: SIZES.padding * 1.5,
    color: COLORS.white,
  },
  signUpButton: {
    marginTop: SIZES.padding,
    backgroundColor: COLORS.purple2,
    height: SIZES.bottomTabHeight,
    borderRadius: SIZES.padding,
  },
});
