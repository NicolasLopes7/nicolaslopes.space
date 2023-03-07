import * as React from "react";
import type { IconElement, IconProps } from "./icon-base";
import { IconBase } from "./icon-base";

export const IconArrowDiagonal = React.forwardRef<
  IconElement,
  Readonly<IconProps>
>(({ ...props }, forwardedRef) => (
  <IconBase ref={forwardedRef} {...props}>
    <path
      d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
      fill="currentColor"
    ></path>
  </IconBase>
));

IconArrowDiagonal.displayName = "IconArrowDiagonal";