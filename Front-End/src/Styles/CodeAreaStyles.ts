import { css } from "@emotion/react";

export const Outer = css`
  margin: auto;
  width: 98%;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;
export const BothEditorContainers = css`
  width: 48.5%;
  margin: auto;
  overflow: hidden;
  border-radius: 12px;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;
export const InputBtnsContainer = css`
  height: 53px;
  padding: 10px;
  border-radius: 12px;
  backdrop-filter: blur(10px);

  /* display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center; */
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;
export const OutputBtnsContainer = css`
  height: 53px;
  padding: 10px;
  border-radius: 12px;
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
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
  gap: 5px;
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

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
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
