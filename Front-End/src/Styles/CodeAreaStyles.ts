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
  height: 86.75vh;

  @media (max-width: 768px) {
    height: 140vh;
  }
  @media (max-width: 480px) {
    height: 170vh;
  }
`;
export const InputBtnsContainer = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  backdrop-filter: var(--blurB);
  background-image: var(--biC);
  flex-wrap: wrap;
  padding: 15px 30px;
  gap: 20px 30px;

  @media (max-width: 768px) {
    gap: 17.5px;
    padding: 15px 25px;
  }
  @media (max-width: 480px) {
    gap: 15px;
    padding: 15px 20px;
  }
`;
export const BothEditorContainers = css`
  margin: auto;
  width: 100%;
  display: flex;
  align-items: center;

  .left-block,
  .right-block {
    min-width: 300px;
    height: 100%;
  }
  .splitter {
    cursor: col-resize;
    height: 100%;
    width: 7.5px;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    .left-block,
    .right-block {
      min-width: 100%;
      min-height: 500px;
    }
    .splitter {
      cursor: row-resize;
      height: 7.5px;
      width: 100%;
    }
  }
  @media (max-width: 480px) {
    .left-block,
    .right-block {
      min-height: 400px;
    }
  }
`;
export const FontBtnOuterBox = css`
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
  padding: 4.6px 10px;
  gap: 12.5px;

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
    font-size: 14px;
    font-weight: 400;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 400;
    border-left: 0.5px solid var(--bgA);
    gap: 7.5px;
    padding-left: 10px;
  }

  :hover {
    background: var(--bgC);
    box-shadow: 0 0 17.5px 5px var(--bgC_glow);
  }
  div svg {
    cursor: pointer;
  }
  div svg:hover {
    color: var(--textColorA);
  }

  @media (max-width: 768px) {
    border-radius: 3.5px;
    padding: 4px 10px;
    gap: 10px;

    :hover {
      box-shadow: none;
      color: var(--textColorB);
    }
    div svg:hover {
      color: var(--textColorB);
    }
    :active {
      background: var(--bgC);
      box-shadow: 0 0 17.5px 5px var(--bgC_glow);
      color: var(--textColorA);
    }
  }
  @media (max-width: 480px) {
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
export const ConnectionOuterBox = css`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-image: var(--biC);
  backdrop-filter: var(--blurC);

  > div:nth-of-type(1) {
    width: 90%;
    display: grid;
    place-content: center;
    place-items: center;
    gap: 30px;
  }
  > div:nth-of-type(1) p {
    width: 100%;
    margin: 0;
    padding: 0;
    font-weight: 300;
    font-size: 18px;
    color: var(--textColorA);
    letter-spacing: 0.5px;
    background: transparent;
    height: fit-content;
  }

  @media (max-width: 768px) {
    gap: 17.5px;

    > div:nth-of-type(1) {
      gap: 25px;
    }
    > div:nth-of-type(1) p {
      font-size: 17px;
    }
  }
  @media (max-width: 480px) {
    gap: 15px;

    > div:nth-of-type(1) {
      gap: 20px;
    }
    > div:nth-of-type(1) p {
      font-size: 16px;
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
