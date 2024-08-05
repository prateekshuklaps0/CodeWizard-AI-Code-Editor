import { extendTheme } from "@chakra-ui/react";

const Theme = extendTheme({
  colors: {
    primary: "#0c356a",
    secondary: "#013dc4",
    // secondary: "#eeedf2",

    btnHoverBG: "#013dc4",
    whiteA: "#ADADC9",

    // Backgrounds
    bgA: "#dce2f0", // used as white color

    // new
    textColorA: "#FFFFFF", // Pure White
    greyA: "#565656", // Charcoal Mist
    greyB: "#747474", // Steel Whisper
  },
});

export default Theme;
