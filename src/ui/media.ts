export interface IBreackpoint {
  xs: "320px";
  sm: "568px";
  md: "768px";
  lg: "1024px";
  xl: "1280px";
  xxl: "1920px";
}

export interface IMediaQuery {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
}

const breakpoint: IBreackpoint = {
  xs: "320px",
  sm: "568px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  xxl: "1920px",
};

const mediaQuery: IMediaQuery = {
  xs: `@media (width <= ${breakpoint.xs} )`,
  sm: `@media (${breakpoint.xs} < width <= ${breakpoint.sm} )`,
  md: `@media (${breakpoint.sm} < width <= ${breakpoint.md} )`,
  lg: `@media (${breakpoint.md} < width <= ${breakpoint.lg} )`,
  xl: `@media (${breakpoint.lg} < width <= ${breakpoint.xl} )`,
  xxl: `@media (width => ${breakpoint.xxl} )`,
};

export { breakpoint, mediaQuery };
