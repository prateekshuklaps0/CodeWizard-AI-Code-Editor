import * as css from "../Styles/NavbarStyles";

import { Box, Center, Text } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box css={css.Outer}>
      <Center boxShadow="shadowA" bg="bgA" css={css.TopNavBox}>
        <Text color="primary" css={css.Title}>
          CodeWizard - AI Code Converter
        </Text>
      </Center>
    </Box>
  );
};

export default Navbar;
