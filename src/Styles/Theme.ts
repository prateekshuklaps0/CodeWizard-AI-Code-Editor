import { extendTheme } from "@chakra-ui/react";

const Theme = extendTheme({
  colors: {
    greyA: "#31304d",
    whiteA: "#b6bbc4",

    lightPurpleA: "#7b66ff",
    lightBlueA: "#83A2FF",
    orangeA: "#F05941",
    orangeB: "#FA7070",
    orangeC: "#FF6C22",
    orangeD: "#e76f51",
    redA: "#ff006e",
    yellowA: "#ccff33",
    greenA: "#9ef01a",
    greenB: "#70e000",

    bgA: "linear-gradient(168deg, #2E335A 1.62%, #1C1B33 95.72%)",
    bgB: "linear-gradient(135deg, rgba(15, 85, 232, 0.1) 0%, rgba(157, 223, 243, 0.1) 100%)",
    bgC: "radial-gradient(50% 128.57% at 50% -36.61%, #8015A7 0%, rgba(97, 54, 144, 0.00) 100%)",
    bgD: "linear-gradient(270deg, rgba(255, 255, 255, 0.00) 0.51%, rgba(255, 255, 255, 0.60) 55.62%, rgba(255, 255, 255, 0.00) 99.68%)",
  },

  shadows: {
    shadowA:
      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
  },
});

export default Theme;
