import { COLORS, SIZES } from "../constants";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const CustomInput = ({
  value,
  onChange,
  keyboardType,
  placeholder,
  customStyles,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View>
      <TextInput
        style={[customStyles, isFocused && { borderColor: COLORS.yellow }]}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        placeholderTextColor={COLORS.gray}
        value={value}
        onChangeText={(text) => onChange(text)}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({});
