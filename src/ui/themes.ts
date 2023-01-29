import { css } from "styled-components";

export const Theme = css`
  html[theme="dark"] {
    --color-contrast: #fee9e2;
    --color-white: #f7ef99;
  }
  html[theme="light"] {
    --color-white: #ffffff;
    --color-contrast: #313037;
  }
`;
