import { css } from "@emotion/react";

import { Button } from "@chakra-ui/react";

const BtnCustom = ({ children, onClick, isDisabled = false }: any) => {
  return <Button css={BtnCss} onClick={onClick} cursor={isDisabled ? "wait" : "pointer"} >{children}</Button>
};

export default BtnCustom;

export const BtnCss = css`
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  background: transparent;
  transition: all 0.2s ease-in-out;
  background: var(--bgC);
  color: var(--textColorB);
  border-radius: 4px;
  padding: 5px 15px;
  gap: 7.5px;

  svg,
  .chakra-spinner {
    margin: 0;
    padding: 0;
    width: 16px;
    height: 16px;
  }
  p {
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-weight: 400;
  }

  :hover {
    background: var(--bgC);
    color: var(--textColorA);
    box-shadow: 0 0 17.5px 5px var(--bgC_glow);
  }

  @media (max-width: 768px) {
    width: fit-content;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
    text-decoration: none;
    background: transparent;
    transition: all 0.2s ease-in-out;
    background: var(--bgC);
    color: var(--textColorB);
    border-radius: 4px;
    padding: 5px 15px;
    gap: 7.5px;

    svg,
    .chakra-spinner {
      margin: 0;
      padding: 0;
      width: 16px;
      height: 16px;
    }
    p {
      margin: 0;
      padding: 0;
      font-size: 16px;
      font-weight: 400;
    }

    :hover {
      background: var(--bgC);
      color: var(--textColorB);
      box-shadow: none;
    }

    :active {
      color: var(--textColorA);
      box-shadow: 0 0 17.5px 5px var(--bgC_glow);
    }
  }
  @media (max-width: 480px) {
    gap: 8px;
    padding: 5px 10px;
  }
`;
