import * as css from "../Styles/NavbarStyles";
import Logo from "../Data/code.webp";

import { Box, Text, Image } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box boxShadow="shadowA" bg="bgA" css={css.Outer}>
      <Box css={css.TopNavBox}>
        <Text fontFamily="megrim" color="primary" css={css.Title}>
          <Image src={Logo} />
          CodeWizard
        </Text>
        <Text css={css.SecondTitle}>AI Code Converter</Text>
      </Box>
    </Box>
  );
};

export default Navbar;
