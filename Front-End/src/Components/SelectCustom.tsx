import { css } from "@emotion/react";
import { Box, useMediaQuery } from "@chakra-ui/react";
import { useRef, useState } from "react";

const SelectCustom = ({ leftImage, array, value, onChange, keyName }: any) => {
  const selectRef = useRef<any>(null);
  const [isBelow768px] = useMediaQuery("(max-width: 768px)");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Div click handler
  const handleOnDivClick = () => {
    if (selectRef.current) {
      if (!isBelow768px && isDropdownOpen) {
        selectRef?.current?.blur();
        setIsDropdownOpen(false);
      } else {
        selectRef?.current?.showPicker();
        setIsDropdownOpen(true);
      }
    }
  };

  return (
    <Box css={SelectTagCss} onClick={handleOnDivClick}>
      {leftImage}
      <select ref={selectRef} value={value} onChange={onChange}>
        {array.map((item: any, ind: number) => <option value={item[keyName] || item} key={ind}>{item.name || item}</option>)}
      </select>
    </Box>
  );
};

export default SelectCustom;

export const SelectTagCss = css`
  height: fit-content;
  width: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  background: transparent;
  transition: all 0.2s ease-in-out;
  background: var(--bgC);
  color: var(--textColorC);
  border-radius: 4px;
  border: none;
  padding: 3.25px 15px;
  gap: 10px;

  select {
    cursor: pointer;
    padding: 0;
    margin: 0;
    background: none;
    outline: none;
  }
  select option {
    color: var(--textColorA);
    background: var(--bgC);
  }

  svg,
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
    border-radius: 3.75px;
    padding: 3.25px 12.5px;
    gap: 8.75px;

    svg,
    p {
      font-size: 15.5px;
      font-weight: 400;
    }

    :hover {
      background: var(--bgC);
      color: var(--textColorA);
      box-shadow: 0 0 17.5px 5px var(--bgC_glow);
    }
  }
  @media (max-width: 480px) {
    gap: 7.5px;
    border-radius: 3.5px;
    padding: 4px 10px;

    svg,
    p {
      font-size: 15px;
      font-weight: normal;
    }
  }
`;
