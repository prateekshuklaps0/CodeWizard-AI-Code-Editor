import { css } from "@emotion/react";

export const Outer = css`
  margin: auto;
  width: 97.5%;
  margin-top: 20px;
  border: 1px solid var(--bgC);
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;

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
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-image: var(--biC);
  box-shadow: var(--shadowA);
  backdrop-filter: var(--blurA);
  /* background-image: var(--biB); */

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
export const BothEditorContainers = css`
  margin: auto;
  width: 100%;
  display: flex;
  align-items: center;

  @media (max-width: 1010px) {
    /* width: 49.5%; */
  }
  @media (max-width: 992px) {
    /* width: 100%; */
  }
  @media (max-width: 768px) {
    /* border-radius: 10px; */
    flex-direction: column;
  }
  @media (max-width: 480px) {
    /* border-radius: 8px; */
  }
`;

export const FontBtnOuterBox = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid var(--textColorA);
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
    border-left: 1px solid var(--textColorA);
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
export const SelectTagCss = css`
  height: fit-content;
  padding-top: 2.5px;
  padding-bottom: 2.5px;
  font-size: 18px;
  font-weight: 500;
  border-radius: 6px;
  border: 1px solid var(--textColorA);
  color: var(--textColorA);
  background: transparent;
  position: relative;
  transition: all 0.75s;
  cursor: pointer;

  :hover {
    background-color: transparent;
    border: 1px solid var(--textColorA);
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
export const ConnectionOuterBox = css`
  display: flex;
  flex-direction: column;
  height: 500px;
  gap: 20px;

  p {
    font-size: 18px;
  }

  .ConnectionSpinner {
    width: 100px;
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
