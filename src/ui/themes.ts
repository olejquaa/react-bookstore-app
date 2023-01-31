import { css } from "styled-components";

export const Theme = css`
  html[theme="dark"] {
    --color-contrast: #fee9e2;
    --color-white: rgb(251 220 12);
  }
  html[theme="light"] {
    --color-white: #ffffff;
    --color-contrast: #313037;
  }
`;
