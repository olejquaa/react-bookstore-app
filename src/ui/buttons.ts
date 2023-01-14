import { css } from "styled-components";
import { Color } from "ui";

const button = {
  default: css`
    min-width: 62px;
    color: ${Color.WHITE};
    font-family: inherit;
    border: none;
    color: ${Color.WHITE};
    background: ${Color.PRYMARY};
  `,
  hover: css`
    color: ${Color.WHITE};
    background: ${Color.SECONDARY};
  `,
  active: css`
    color: ${Color.RED};
  `,
};

export { button };
