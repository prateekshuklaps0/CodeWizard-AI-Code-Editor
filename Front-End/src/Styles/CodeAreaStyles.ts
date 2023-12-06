import { css } from "@emotion/react";

export const Outer = css`
  display: flex;
  width: 97%;
  margin: auto;
  gap: 30px;
  margin-top: 50px;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;
export const ButtonsCont = css`
  height: fit-content;
  padding: 25px;
  border-radius: 12px;
  backdrop-filter: blur(5px);
  margin-top: 100px;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;
export const CurrLangCont = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;

export const CurrLangSelectBox = css`
  display: flex;
  justify-content: space-between;
  gap: 8px;

  img {
    width: 30px;
    height: 30px;
  }

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;
export const TextCurrLang = css`
  font-size: 18px;
  font-weight: 400;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;
export const CurrOptionBox = css`
  width: 140px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 500;
  border-radius: 7px;
  font-size: 16px;
  overflow: hidden;
  padding-right: 4px;

  div {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;
export const MenuListCont = css`
  border: none;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;
export const LangItemCss = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 15px;
  font-weight: 400;

  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  img {
    width: 25px;
    height: 25px;
  }

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;
export const BtnContainer = (
  color: any,
  borderColor: any,
  hoverBackground: any
) => css`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-top: 40px;

  button {
    display: flex;
    align-items: center;
    gap: 7.5px;
    border: none;
    font-size: 18px;
    border-radius: 6px;
    border: 1px solid ${borderColor};
    color: ${color};
    overflow: hidden;
    background: transparent;
    position: relative;
    transition: all 0.75s;
  }
  button:hover {
    border-radius: 100px;
    color: #000;
    background-color: transparent;
  }
  span {
    transition: all 0.7s;
    z-index: -1;
  }
  button .first {
    content: "";
    position: absolute;
    right: 100%;
    top: 0;
    width: 25%;
    height: 100%;
    background: ${hoverBackground};
  }
  button:hover .first {
    top: 0;
    right: 0;
  }
  button .second {
    content: "";
    position: absolute;
    left: 25%;
    top: -100%;
    height: 100%;
    width: 25%;
    background: ${hoverBackground};
  }
  button:hover .second {
    top: 0;
    left: 50%;
  }
  button .third {
    content: "";
    position: absolute;
    left: 50%;
    height: 100%;
    top: 100%;
    width: 25%;
    background: ${hoverBackground};
  }
  button:hover .third {
    top: 0;
    left: 25%;
  }
  button .fourth {
    content: "";
    position: absolute;
    left: 100%;
    top: 0;
    height: 100%;
    width: 25%;
    background: ${hoverBackground};
  }
  button:hover .fourth {
    top: 0;
    left: 0;
  }

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;

export const EditorCont = css`
  display: flex;

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
