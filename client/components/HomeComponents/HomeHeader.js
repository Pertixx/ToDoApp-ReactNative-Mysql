import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { COLORS, SIZES } from "../../constants";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import CustomButton from "../CustomButton";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { logOut } from "../../store/actions/user.action";
import { useDispatch } from "react-redux";

const HomeHeader = ({ handleShowModal }) => {
  const scale = useSharedValue(0);
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    handleProfilePress();
    dispatch(logOut());
  };

  const handleProfilePress = () => {
    setIsVisible(!isVisible);
    scale.value = withTiming(isVisible ? 0 : 1, { duration: 250 });
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handleOnPress = () => {
    console.log("Pressed");
  };

  return (
    <View style={styles.container}>
      <CustomButton
        onPress={handleProfilePress}
        customStyles={styles.profileButton}
        icon={<Feather name="user" size={SIZES.icon} color={COLORS.white2} />}
      />
      {isVisible && (
        <Animated.View style={[styles.logOutContainer, animatedStyle]}>
          <Text
            style={{
              fontWeight: "bold",
              color: COLORS.white,
              marginBottom: SIZES.padding,
            }}
          >
            Log Out
          </Text>
          <CustomButton
            onPress={handleLogOut}
            icon={
              <Feather name="power" size={SIZES.icon} color={COLORS.yellow} />
            }
          />
        </Animated.View>
      )}
      <View style={styles.buttonsContainer}>
        <CustomButton
          onPress={handleOnPress}
          icon={
            <Ionicons
              name="notifications-outline"
              size={SIZES.icon}
              color={COLORS.white2}
            />
          }
          customStyles={styles.customButtonStyle}
        />
        <CustomButton
          onPress={handleShowModal}
          icon={
            <AntDesign name="plus" size={SIZES.icon} color={COLORS.white2} />
          }
          customStyles={styles.customButtonStyle}
        />
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: SIZES.padding,
    marginTop: SIZES.padding,
  },
  profileButton: {
    backgroundColor: COLORS.gray,
    padding: SIZES.padding,
    borderRadius: SIZES.padding,
  },
  customButtonStyle: {
    backgroundColor: COLORS.purple2,
    padding: SIZES.padding,
    borderRadius: SIZES.padding,
    marginLeft: SIZES.padding - 5,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logOutContainer: {
    backgroundColor: COLORS.purple3,
    position: "absolute",
    left: SIZES.padding * 4,
    padding: SIZES.padding,
    alignSelf: "center",
    borderRadius: SIZES.padding,
  },
});
