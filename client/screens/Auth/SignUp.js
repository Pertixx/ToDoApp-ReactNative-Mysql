import { COLORS, SIZES } from "../../constants";
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";

import { BlurView } from "expo-blur";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import { Feather } from "@expo/vector-icons";

const SignUp = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
              <Text style={styles.title}>Welcome!</Text>
              <Text style={styles.subTitle}>
                Please sign up to start using the app!
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
                  value={name}
                  onChange={setName}
                  placeholder="UserName"
                />
              </View>
              <View
                style={[
                  styles.inputContainer,
                  { borderBottomWidth: 2, borderColor: COLORS.white },
                ]}
              >
                <Feather name="mail" size={SIZES.icon} color={COLORS.white} />
                <CustomInput
                  customStyles={styles.input}
                  value={email}
                  onChange={setEmail}
                  placeholder="Email"
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
                onPress={() => navigation.navigate("SignIn")}
              >
                Already have an account? Sign In
              </Text>
              <CustomButton
                customStyles={styles.signUpButton}
                icon={
                  <Text
                    style={{
                      color: COLORS.white,
                      fontWeight: "bold",
                      fontSize: SIZES.h3,
                    }}
                  >
                    Sign Up
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

export default SignUp;

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
