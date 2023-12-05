import { extendTheme } from "@chakra-ui/react";

const Theme = extendTheme({
  colors: {
    primary: "orange",

    // Background Colors
    primaryTheme: "#0d47a1", // BlueTheme
    bgA: "#120059b6", // BlueA
  },
  shadows: {
    shadowA:
      "#0d47a1 0px 50px 100px -20px, #0d47a1 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;",
    shadowAUpsideDown:
      "#0d47a1 0px -50px 100px -20px,  #0d47a1 0px -30px 60px -30px, rgba(10, 37, 64, 0.35) 0px 2px 6px 0px inset;",
  },
  fonts: {
    k2d: "K2D",
    nun: "'Nunito', sans-serif",
    ver: "'Varela Round', sans-serif",
    megrim: "'Megrim', cursive",
  },
});

export default Theme;
