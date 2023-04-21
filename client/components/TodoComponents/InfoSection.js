import { COLORS, SIZES } from "../../constants";
import { StyleSheet, Text, View } from "react-native";

import React from "react";

const InfoSection = ({ title, description, creationDate }) => {
  const date = new Date(creationDate);
  const options = { month: "short", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionLabel}>Description</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.createdContainer}>
        <Text style={styles.descriptionLabel}>Created</Text>
        <Text style={styles.description}>{formattedDate}, by Agustin</Text>
      </View>
    </View>
  );
};

export default InfoSection;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: SIZES.padding,
    marginTop: SIZES.padding,
  },
  title: {
    fontWeight: "bold",
    fontSize: SIZES.title + 20,
    color: COLORS.yellow,
    marginVertical: SIZES.padding,
  },
  descriptionContainer: {
    marginVertical: SIZES.padding,
  },
  descriptionLabel: {
    fontWeight: "bold",
    color: COLORS.white,
    fontSize: SIZES.h2,
  },
  description: {
    fontWeight: "bold",
    color: COLORS.gray,
    fontSize: SIZES.h3,
    marginTop: SIZES.padding - 5,
  },
  createdContainer: {
    marginVertical: SIZES.padding,
  },
});
