import { COLORS, SIZES } from "../constants";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const CustomInput = ({ value, onChange }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View>
      <TextInput
        style={[styles.input, isFocused && { borderColor: COLORS.yellow }]}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder="Enter the title"
        placeholderTextColor={COLORS.gray}
        value={value}
        onChangeText={(text) => onChange(text)}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  input: {
    borderWidth: 3,
    borderColor: COLORS.lightGray2,
    padding: SIZES.padding - 5,
    borderRadius: SIZES.padding * 1.2,
    color: COLORS.white,
  },
});
