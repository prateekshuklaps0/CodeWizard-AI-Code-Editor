import { css } from "@emotion/react";

export const Outer = css`
  width: 100%;
  backdrop-filter: blur(10px);
  height: 60px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  position: sticky;
  top: 0;
  z-index: 100;

  @media (max-width: 768px) {
    height: 55px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  @media (max-width: 480px) {
    height: 50px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;
export const TopNavBox = css`
  margin: auto;
  width: 90%;
  padding-right: 80px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 92%;
    padding-right: 10px;
  }
  @media (max-width: 480px) {
    width: 95%;
    padding-right: 3px;
  }
`;
export const Title = css`
  display: flex;
  align-items: center;
  font-size: 32px;
  gap: 20px;

  img {
    width: 40px;
  }

  @media (max-width: 768px) {
    font-size: 30px;
    gap: 15px;

    img {
      width: 35px;
    }
  }
  @media (max-width: 480px) {
    font-size: 28px;
    gap: 6px;

    img {
      width: 30px;
    }
  }
`;
export const SecondTitle = css`
  font-size: 22px;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    font-size: 20px;
    letter-spacing: 1px;
  }
  @media (max-width: 480px) {
    font-size: 15px;
    letter-spacing: 0.5px;
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
