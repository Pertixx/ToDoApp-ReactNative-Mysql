import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const SHADOW = {
  shadow1: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
};

export const SIZES = {
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,

  largeTitle: 40,

  body: 14,
  padding: 15,
  icon: 24,
  bottomTabHeight: 60,

  width,
  height,
};

export const COLORS = {
  darkGreen: "#229879",
  darkLime: "#1A8871",
  lightLime: "#BBD6C5",
  lime: "#2AD699",
  lightGreen: "#E7F9EF",
  lightGreen1: "#8EbCA0",

  purple: "rgba(17, 28, 47, 255)",
  purple2: "rgba(23,39,65,255)",

  white: "#fff",
  white2: "#F9F9F9",
  black: "#020202",
  black2: "#06113C",
  black3: "#212121",
  black4: "#121212",
  black5: "#0B0B0C",
  black6: "#0E0E1E",
  blue: "#4096FE",
  gray: "#777777",
  gray2: "#F8F8F8",
  gray3: "#DDDDDD",
  gray4: "#B2B1B9",
  lightGray: "#F5F6FB",
  lightGray2: "#757575",

  darkOrange: "#E65100",
  orange: "#FF8C32",

  transparentBlack1: "rgba(2, 2, 2, 0.1)",
  transparentBlack3: "rgba(2, 2, 2, 0.3)",
  transparentBlack5: "rgba(2, 2, 2, 0.5)",
  transparentBlack7: "rgba(2, 2, 2, 0.7)",
  transparentBlack9: "rgba(2, 2, 2, 0.9)",

  transparentGray: "rgba(77,77,77, 0.8)",
  transparentDarkGray: "rgba(20,20,20, 0.9)",

  transparent: "transparent",
};

const appTheme = { SHADOW, SIZES, COLORS };

export default appTheme;
