import { css } from "@emotion/react";

export const Outer = css`
  margin: auto;
  width: 98%;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 992px) {
    flex-direction: column;
    width: 92%;
    gap: 16px;
  }
  @media (max-width: 768px) {
    width: 95%;
    gap: 12px;
  }
  @media (max-width: 480px) {
    width: 95%;
    gap: 8px;
  }
`;
export const BothEditorContainers = css`
  margin: auto;
  width: 48.5%;
  border-radius: 12px;
  overflow: hidden;

  @media (max-width: 1010px) {
    width: 49.5%;
  }
  @media (max-width: 992px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    border-radius: 10px;
  }
  @media (max-width: 480px) {
    border-radius: 8px;
  }
`;
export const InputBtnsContainer = css`
  height: 53px;
  padding: 10px;
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
    height: 48px;
    padding: 8px;
  }
  @media (max-width: 480px) {
    height: fit-content;
    padding: 7.5px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    place-items: center;
    gap: 6px;
  }
`;
export const FontBtnOuterBox = (borderColor: string) => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${borderColor};
  height: 30px;
  padding-left: 4px;
  font-size: 18px;
  border-radius: 6px;
  transition: all 0.75s;
  width: 95px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 400;
    border-left: 1px solid ${borderColor};
    width: 67px;
    padding: 0px 3px;
  }
  div p {
    font-size: 16px;
  }

  div svg {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    font-size: 16.5px;
    border-radius: 5.5px;
    width: 92.5px;

    div {
      width: 65px;
      padding: 0px 3px;
    }
    div p {
      font-size: 15px;
    }
  }
  @media (max-width: 480px) {
    height: 29px;
    padding-left: 3px;
    font-size: 15.5px;
    border-radius: 5px;
    width: 87px;

    div {
      width: 62px;
      padding: 0px 2.5px;
    }
    div p {
      font-size: 14px;
    }
  }
`;
export const OutputBtnsContainer = css`
  height: 53px;
  padding: 10px;
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    height: 48px;
    padding: 8px;
  }
  @media (max-width: 480px) {
    height: 44px;
  }
`;
export const SelectTagCss = (
  color: string,
  borderColor: string,
  fontWeight: number
) => css`
  height: fit-content;
  padding-top: 2.5px;
  padding-bottom: 2.5px;
  font-size: 18px;
  font-weight: ${fontWeight};
  border-radius: 6px;
  border: 1px solid ${borderColor};
  color: ${color};
  background: transparent;
  position: relative;
  transition: all 0.75s;
  cursor: pointer;

  :hover {
    background-color: transparent;
    border: 1px solid ${borderColor};
  }
  :focus {
    border: none;
    outline: none;
  }

  @media (max-width: 768px) {
    padding-top: 2px;
    padding-bottom: 2px;
    font-size: 16.5px;
    border-radius: 5.5px;
  }
  @media (max-width: 480px) {
    border-radius: 5px;
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
