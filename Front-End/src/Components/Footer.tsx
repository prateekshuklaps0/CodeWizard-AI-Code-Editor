import { css } from "@emotion/react";
import { Box, Text, Image, Highlight } from "@chakra-ui/react";

import { AiOutlineDash as LeftIcon } from "react-icons/ai";
import { AiOutlineDash as RightIcon } from "react-icons/ai";
import { GoLinkExternal as ExternalLinkIcon } from "react-icons/go";

const Footer = () => {
  return (
    <Box css={Outer}>
      <Text color="var(--textColorA)" css={TextCss}>
        <Image color="var(--textColorC)" as={LeftIcon} />
        Designed and Developed by
        <Image color="var(--textColorC)" as={RightIcon} />
      </Text>

      <a href="https://prateekshuklaps0.github.io" target="_blank">
        <Text color="var(--textColorA)" fontFamily="megrim" css={NameCss}>
          <Highlight query="a" styles={{ color: "var(--bgD)", pl: ["3.5px", "4px", "4px"] }}>Prateek</Highlight>
          <Image as={ExternalLinkIcon} />
        </Text>
      </a>
    </Box>
  );
};

export default Footer;

const Outer = css`
  width: 100%;
  padding: 25px 0px 25px;
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  gap: 7.5px;

  a {
    width: fit-content;
    margin: auto;
  }

  @media (max-width: 768px) {
    padding: 15px 0px 15px;
    margin-top: 15px;
    gap: 6px;
  }
  @media (max-width: 480px) {
    padding: 10px 0px 10px;
    margin-top: 12.5px;
    gap: 5px;
  }
`;
const TextCss = css`
  margin: auto;
  display: inline-flex;
  align-items: center;
  font-size: 22px;
  gap: 12px;
  font-weight: 300;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    font-size: 20px;
    gap: 10px;
  }
  @media (max-width: 480px) {
    font-size: 18px;
    gap: 8px;
  }
`;
const NameCss = css`
  text-decoration: none;
  font-weight: 600;
  font-size: 35px;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;

  svg {
    font-size: 26px;
    margin-left: 10px;
  }

  @media (max-width: 768px) {
    font-size: 32px;

    svg {
      font-size: 22px;
      margin-left: 8px;
    }
  }
  @media (max-width: 480px) {
    font-size: 28px;

    svg {
      font-size: 18px;
      margin-left: 6px;
    }
  }
`;

/* 

export const TechStack = css`

@media (max-width: 992px) {
}
@media (max-width: 768px) {
}
@media (max-width: 480px) {
}
`;

*/
