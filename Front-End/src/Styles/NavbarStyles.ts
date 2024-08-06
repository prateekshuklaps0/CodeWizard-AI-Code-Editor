import { css } from "@emotion/react";

export const Outer = css`
  width: 100%;
  height: 60px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  position: fixed;
  top: 0;
  z-index: 100;
  border: none;
  box-shadow: var(--shadowA);
  backdrop-filter: var(--blurA);
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: var(--bgC);
  background-image: var(--biC);

  @media (max-width: 768px) {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;
export const TopNavBox = css`
  margin: auto;
  width: 90%;
  padding-right: 60px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  @media (max-width: 992px) {
    padding-right: 30px;
  }
  @media (max-width: 768px) {
    width: 92%;
    padding-right: 0px;
  }
  @media (max-width: 480px) {
    width: 87.5%;
  }
`;
export const Title = css`
  display: flex;
  align-items: center;
  font-size: 28px;
  gap: 17.5px;
  font-weight: 500;
  color: var(--textColorA);

  img {
    width: 30px;
  }

  @media (max-width: 768px) {
    font-size: 24px;
    gap: 10px;

    img {
      width: 25px;
    }
  }
  @media (max-width: 480px) {
    gap: 7.5px;
    letter-spacing: 1px;
    align-items: flex-start;

    img {
      width: 22.5px;
      margin: 7.5px 0px 0px 0px;
    }
  }
`;
export const SecondTitle = css`
  font-size: 20px;
  letter-spacing: 0.75px;
  font-weight: 300;
  word-spacing: -0.5px;

  @media (max-width: 768px) {
    font-size: 18px;
    letter-spacing: 1px;
    word-spacing: -1px;
  }
  @media (max-width: 480px) {
    margin: -7px 2.5px 0px 0px;
    padding: 0;
    text-align: right;
    font-size: 12px;
    letter-spacing: 0.5px;
  }
`;
export const ImportBtn = css`
  margin: 0;
  height: fit-content;
  font-size: 15.5px;
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 7px 12px;
  border-radius: 5px;
  letter-spacing: 0.5px;
  background: var(--greyA);
  color: var(--textColorA);
  :hover {
    background: var(--greyA);
  }
  :active {
    background: var(--greyB);
  }

  @media (max-width: 768px) {
    font-size: 15px;
    gap: 6px;
    padding: 6px 10px;
  }
  @media (max-width: 480px) {
    font-size: 14.5px;
    font-weight: 300;
    gap: 5px;
    padding: 6px 8.5px;
    border-radius: 4px;
  }
`;
export const ModalContentCss = css`
  color: var(--textColorA);
  background: var(--bgC);
  background: -webkit-linear-gradient(to top, #24243e, #302b63, var(--bgB));
  background: linear-gradient(to top, #24243e, #302b63, var(--bgB));
  border-radius: 10px;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;
export const ModalHeaderCss = css`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > p:nth-of-type(1) {
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    gap: 7.5px;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0.5px;
    word-spacing: -0.5px;

    > svg {
      font-size: 20px;
    }
  }
  > svg:nth-of-type(1) {
    cursor: pointer;
    background: var(--bgC);
    border-radius: 50%;
    width: 27.5px;
    height: 27.5px;
    padding: 5px;
  }
  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;
export const ModalBodyCss = css`
  > form:nth-of-type(1) {
    margin: auto;
    display: flex;
    align-items: center;
    width: 480px;
    border: 2px solid var(--primary);
    padding-left: 1px;
    overflow: hidden;
    border-radius: 50px;
    background: var(--bgA);
  }
  input:nth-of-type(1) {
    border: none;
    background: transparent;
    height: 35px;
    flex-grow: 1;
    outline: none;
    padding-left: 12.5px;
    font-weight: 400;
    font-size: 16px;
    letter-spacing: 0.5px;
  }
  button {
    padding: 0;
    height: 100%;
    height: 35px;
    border: none;
    border-radius: 0;
    background-image: var(--biC);
    background: var(--bgB);
    color: var(--textColorA);
    background: var(--bgC);
    width: 45px;

    svg {
      font-size: 20px;
    }
  }
  button:nth-of-type(2) {
    border-left: 1px solid var(--bgB);
  }
  button:hover {
    background: var(--bgC);
  }
  button:active {
    background: var(--bgA);
  }

  @media (max-width: 768px) {
    > form:nth-of-type(1) {
      width: 400px;
    }
    input:nth-of-type(1) {
      height: 32.5px;
      padding-left: 10px;
      font-size: 15px;
      letter-spacing: 0.5px;
    }
    button {
      height: 32.5px;
      width: 45px;

      svg {
        font-size: 20px;
      }
    }
  }
  @media (max-width: 480px) {
    > form:nth-of-type(1) {
      width: 275px;
    }
    input:nth-of-type(1) {
      width: 100%;
      height: 30px;
      padding-left: 7px;
      font-size: 14px;
      letter-spacing: 0px;
    }
    button {
      height: 30px;
      width: 30px;

      svg {
        font-size: 18px;
      }
    }
  }
`;
export const UsernameInpCss = css`
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
