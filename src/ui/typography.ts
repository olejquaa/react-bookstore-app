import { css } from "styled-components";
import { Color } from "./colors";
import { mediaQuery } from "./media";

const typography = {
  h1: css`
    font-family: "Bebas Neue";
    font-style: normal;
    font-weight: 700;
    font-size: 56px;
    line-height: 64px;
    letter-spacing: 0.08em;

    color: ${Color.PRYMARY};
    ${mediaQuery.xs} {
      font-style: normal;
      font-weight: 700;
      font-size: 32px;
      line-height: 44px;
      letter-spacing: 0.08em;
    }
  `,

  h2: css`
    font-family: "Bebas Neue";
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    letter-spacing: 0.08em;

    color: ${Color.PRYMARY};

    ${mediaQuery.xs} {
      font-style: normal;
      font-weight: 700;
      font-size: 28px;
      line-height: 40px;
      letter-spacing: 0.08em;
    }
  `,

  h3: css`
    font-family: "Bebas Neue";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;

    color: ${Color.PRYMARY};

    ${mediaQuery.xs} {
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 32px;
    }
  `,

  s1: css`
    font-family: "Bebas Neue";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.1em;

    color: ${Color.PRYMARY};

    ${mediaQuery.xs} {
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 24px;
      letter-spacing: 0.05em;
    }
  `,

  bodyPrimary: css`
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;

    color: ${Color.PRYMARY};

    ${mediaQuery.xs} {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 32px;
    }
  `,

  bodySecondary: css`
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;

    color: ${Color.PRYMARY};

    ${mediaQuery.xs} {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
    }
  `,
};

export { typography };
