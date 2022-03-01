import { createTheme } from "@shopify/restyle";

const palette = {
  purpleLight: "#8C6FF7",
  purplePrimary: "#5A31F4",
  purpleDark: "#3F22AB",

  greenLight: "#56DCBA",
  greenPrimary: "#0ECD9D",
  greenDark: "#0A906E",

  primary: "#350D37",
  text: "#868686",
  black: "#1C1C1C",
  white: "#FFF",
  gray1: "#DDDDDD",
  gray2: "#606060"
};
const theme = createTheme({
  colors: {
    mainBackground: palette.white,
    mainForeground: palette.black,
    headerBackground: palette.primary,
    cardPrimaryBackground: palette.purplePrimary,
    buttonPrimaryBackground: palette.purplePrimary,
    tabBarActiveTint: palette.black,
    tabBarInactiveTint: palette.text,
    inputBorder: palette.gray1,
    inputPress: palette.gray1,
    placeholderText: palette.gray2
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40
  },
  breakpoints: {
    phone: 0,
    tablet: 768
  },
  textVariants: {
    screenHeader: {
      fontFamily: "System",
      fontWeight: "bold",
      fontSize: 22,
      lineHeight: 26,
      color: "mainBackground"
    },
    header: {
      fontFamily: "System",
      fontWeight: "bold",
      fontSize: 34,
      lineHeight: 42.5,
      color: "mainForeground"
    },
    subheader: {
      fontFamily: "System",
      fontWeight: "600",
      fontSize: 28,
      lineHeight: 36,
      color: "mainForeground"
    },
    body: {
      fontFamily: "System",
      fontSize: 16,
      lineHeight: 24,
      color: "mainForeground"
    }
  }
});

export default theme;
