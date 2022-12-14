import { css } from "styled-components";
import { Color } from "./colors";

const typography = {
  h1: css`
    font-family: "Bebas Neue";
    font-style: normal;
    font-weight: 700;
    font-size: 56px;
    line-height: 64px;

    color: ${Color.PRYMARY};
  `,

  h2: css`
    font-family: "Bebas Neue";
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;

    color: ${Color.PRYMARY};
  `,

  h3: css`
    font-family: "Bebas Neue";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;

    color: ${Color.PRYMARY};
  `,

  s1: css`
    font-family: "Bebas Neue";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.05em;

    color: ${Color.PRYMARY};
  `,

  b1_primary: css`
    font-family: "Playfair Display", serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;

    color: ${Color.PRYMARY};
  `,

  b1_secondary: css`
    font-family: "Playfair Display", serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;

    color: ${Color.PRYMARY};
  `,
};

export { typography };
