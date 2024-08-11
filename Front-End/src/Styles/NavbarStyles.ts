import { css } from "@emotion/react";

export const Outer = css`
  width: 100%;
  height: 60px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  position: fixed;
  background: var(--bgE);
  top: 0;
  z-index: 100;
  border: none;
  backdrop-filter: var(--blurA);
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: var(--bgC);
  background-image: var(--biA);

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
  min-height: 400px;
  height: 85%;
  color: var(--textColorA);
  background: var(--bgC);
  background: -webkit-linear-gradient(to top, #24243e, #302b63, var(--bgB));
  background: linear-gradient(to top, #24243e, #302b63, var(--bgB));
  border-radius: 10px;

  .userNameCss {
    margin: 0;
    padding: 0;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.5px;
    word-spacing: -0.5px;
    color: var(--textColorB);

    span {
      color: var(--textColorA);
      font-size: 18px;
      font-weight: 400;
      letter-spacing: 0.5px;
      word-spacing: -0.5px;
    }
  }

  @media (max-width: 768px) {
    border-radius: 8.5px;

    .userNameCss {
      margin: -5px auto 7.5px;
    }
  }
  @media (max-width: 480px) {
    border-radius: 7.5px;

    .userNameCss {
      margin: -5px auto 7.5px;
    }
  }
`;
export const ModalHeaderCss = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: default;

  .importCodeHeader {
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

  @media (max-width: 768px) {
    > svg:nth-of-type(1) {
      width: 26.5px;
      height: 26.5px;
      padding: 4px;
    }
  }
  @media (max-width: 480px) {
    .importCodeHeader {
      gap: 6.5px;
      font-size: 14.5px;
      word-spacing: -0.5px;

      > svg {
        font-size: 17px;
      }
    }
  }
`;
export const ModalBodyCss = css`
  display: flex;
  flex-direction: column;
  overflow: hidden;

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
    min-height: 35px;
  }
  > form > div:nth-of-type(1) {
    margin: 0;
    background: var(--greyC);
    color: var(--textColorA);
    border-radius: 50px;
    overflow: hidden;
    display: grid;
    place-content: center;
    place-items: center;
    width: 32.5px;
    height: 32.5px;

    svg {
      font-size: 18px;
    }
  }
  input:nth-of-type(1) {
    border: none;
    background: transparent;
    height: 100%;
    flex-grow: 1;
    outline: none;
    padding: 0px 0px 0px 12.5px;
    font-weight: 400;
    font-size: 16px;
    letter-spacing: 0.5px;
  }
  button {
    padding: 0;
    height: 100%;
    border: none;
    border-radius: 0;
    background-image: var(--biC);
    background: var(--bgB);
    color: var(--textColorC);
    background: var(--bgC);
    width: 45px;

    :hover {
      color: var(--textColorA);
    }

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
      min-height: 32.5px;
    }
    > form > div:nth-of-type(1) {
      width: 30px;
      height: 30px;

      svg {
        font-size: 16px;
      }
    }
    input:nth-of-type(1) {
      padding-left: 10px;
      font-size: 15px;
      letter-spacing: 0.5px;
    }
    button {
      width: 45px;

      svg {
        font-size: 20px;
      }
    }
  }
  @media (max-width: 480px) {
    > form:nth-of-type(1) {
      width: 275px;
      min-height: 30px;
    }
    > form > div:nth-of-type(1) {
      width: 42.5px;
      height: 25px;

      svg {
        font-size: 14px;
      }
    }
    input:nth-of-type(1) {
      width: 100%;
      padding-left: 7px;
      font-size: 14px;
      letter-spacing: 0px;
    }
    button {
      width: 30px;

      svg {
        font-size: 18px;
      }
    }
  }
`;
export const Loader1OuterDiv = css`
  flex-grow: 1;
  overflow: auto;

  .importCodeProgess {
    height: 5px;
    border-radius: 50px;
    background: var(--bgC);
    margin-top: 20px;
  }
  > div:nth-of-type(2) {
    display: grid;
    place-content: center;
    place-items: center;
    height: 87.5%;
  }

  @media (max-width: 768px) {
    .importCodeProgess {
      height: 5px;
      margin-top: 17.5px;
    }
  }
  @media (max-width: 480px) {
    .importCodeProgess {
      height: 4px;
      margin-top: 15px;
    }
  }
`;
export const Loader1 = css`
  width: 64px;
  height: 64px;
  position: relative;
  background-image: linear-gradient(var(--textColorA) 16px, transparent 0),
    linear-gradient(var(--bgD) 16px, transparent 0),
    linear-gradient(var(--bgD) 16px, transparent 0),
    linear-gradient(var(--textColorA) 16px, transparent 0);
  background-repeat: no-repeat;
  background-size: 16px 16px;
  background-position: left top, left bottom, right top, right bottom;
  animation: rotate 1s linear infinite;

  @keyframes rotate {
    0% {
      width: 64px;
      height: 64px;
      transform: rotate(0deg);
    }
    50% {
      width: 30px;
      height: 30px;
      transform: rotate(180deg);
    }
    100% {
      width: 64px;
      height: 64px;
      transform: rotate(360deg);
    }
  }
  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;
export const ErrorBoxCss = css`
  flex-grow: 1;
  overflow: auto;
  display: grid;
  place-content: center;
  place-items: center;
  height: 95%;

  > div:nth-of-type(1) {
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
  }
  img:nth-of-type(1) {
    width: 140px;
    margin: auto;
  }
  p:nth-of-type(1) {
    padding: 0;
    margin: 0 auto;
    line-height: 30px;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0.5px;
    color: var(--textColorC);
    cursor: default;

    span {
      font-size: 20px;
      color: var(--textColorA);
    }
  }

  @media (max-width: 768px) {
    > div:nth-of-type(1) {
      gap: 17.5px;
    }
    img:nth-of-type(1) {
      width: 120px;
    }
    p:nth-of-type(1) {
      line-height: 28.5px;
      font-size: 16.5px;

      span {
        font-size: 18px;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
  @media (max-width: 480px) {
    > div:nth-of-type(1) {
      gap: 15px;
    }
    img:nth-of-type(1) {
      width: 100px;
    }
    p:nth-of-type(1) {
      line-height: 25px;
      font-size: 15px;
      letter-spacing: 0px;
      display: flex;
      flex-direction: column;

      span {
        font-size: 16px;
      }
    }
  }
`;
export const EmptyContentDivOuter = css`
  flex-grow: 1;
  height: 100%;
  display: grid;
  place-content: center;
  place-items: center;

  img:nth-of-type(1) {
    width: 240px;
    margin: auto;
  }

  @media (max-width: 768px) {
    img:nth-of-type(1) {
      width: 210px;
    }
  }
  @media (max-width: 480px) {
    img:nth-of-type(1) {
      width: 180px;
    }
  }
`;
export const RepoListOuterDiv = css`
  height: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;

  .selectRepoTextDiv {
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7.5px;
    font-size: 16px;
    margin-bottom: 12.5px;

    p {
      text-align: center;
      font-weight: 400;
      font-size: 16px;
      padding: 2.5px 7.5px;
      letter-spacing: 0.5px;
      background: var(--bgC);
      border-radius: 5px;
      cursor: default;
      white-space: nowrap;
    }
    > div {
      display: flex;
      align-items: center;
      gap: 10px;
      overflow: auto;
      width: 100%;
      padding-bottom: 5px;
      scroll-snap-align: center;
    }
  }
  .containerDiv {
    overflow: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-right: 20px;
    padding-bottom: 35px;
  }
  .containerDiv > div {
    display: flex;
    align-items: center;
    gap: 7.5px;
    padding: 5px 10px;
    border: 1px solid var(--greyC);
    cursor: pointer;
    background-image: var(--biC);
    border-radius: 5px;
    transition: all 0.25s ease;

    svg,
    p {
      padding: 0;
      margin: 0;
      font-size: 16px;
      letter-spacing: 0.5px;
      font-weight: 300;
    }

    :hover {
      background-image: var(--biA);
    }
    :active {
      background-image: var(--biB);
    }
  }
  .containerDiv > pre {
    background: var(--greyD);
    color: var(--textColorA);
    white-space: pre-wrap;
    font-family: monospace;
    overflow-x: auto;
    padding: 16px;
    font-size: 14px;
    line-height: 1.5;
    border-radius: 4px;
    letter-spacing: 0.5px;
    min-height: 100%;
  }

  @media (max-width: 768px) {
    margin-top: 27.5px;

    .selectRepoTextDiv {
      margin-bottom: 12.5px;

      p {
        font-size: 15px;
        padding: 2.5px 10px;
        border-radius: 4px;
      }
      > div {
        gap: 7.5px;
        padding-bottom: 7.5px;
      }
    }
    .containerDiv {
      gap: 7.5px;
      padding-right: 15px;
      padding-bottom: 32.5px;
    }
    .containerDiv > div {
      padding: 4px 7.5px;
      border-radius: 4.25px;

      svg,
      p {
        font-size: 15px;
      }

      :hover {
        background-image: var(--biC);
      }
    }
    .containerDiv > pre {
      padding: 14px;
      font-size: 13.5px;
    }
  }
  @media (max-width: 480px) {
    margin-top: 20px;

    .selectRepoTextDiv {
      margin-bottom: 15px;

      p {
        font-size: 14px;
        padding: 2.5px 7.5px;
        border-radius: 3px;
        font-weight: 300;
      }
    }
    .containerDiv {
      padding-right: 10px;
      padding-bottom: 25px;
    }
    .containerDiv > div {
      padding: 4px 7.5px;
      border-radius: 3.5px;
      border-width: 0.5px;
      gap: 5px;

      svg {
        font-size: 14px;
        min-width: 17.5px;
      }

      p {
        font-size: 14px;
        line-height: 18px;
      }
    }
    .containerDiv > pre {
      padding: 12px;
      font-size: 12px;
    }
  }
`;
export const ImportFooterCss = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-top: -10px;

  > div {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  button {
    padding: 7.5px 12.5px;
    margin: 0;
    height: fit-content;
    white-space: nowrap;
    font-size: 16px;
    font-weight: 400;
    display: flex;
    align-items: center;
    gap: 7.5px;
    cursor: pointer;
    border-radius: 4px;
    background: var(--bgC);
    color: var(--textColorC);
    background-image: var(--biA);

    :hover {
      color: var(--textColorA);
      background: var(--bgC);
      background-image: var(--biA);
    }
    :active {
      color: var(--textColorA);
      background-image: var(--biB);
    }
  }

  @media (max-width: 768px) {
    gap: 17.5px;
    margin-top: -12.5px;
    flex-direction: column;

    > div {
      gap: 17.5px;
    }
    button {
      padding: 7px 11.5px;
      font-size: 15px;
      gap: 7.5px;
      border-radius: 4.25px;

      :hover {
        color: var(--textColorC);
      }
    }
  }
  @media (max-width: 480px) {
    gap: 15px;
    margin-top: -15px;
    flex-direction: column;

    > div {
      gap: 15px;
    }
    button {
      padding: 6px 10px;
      font-size: 14px;
      gap: 5px;
      border-radius: 3.5px;
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
