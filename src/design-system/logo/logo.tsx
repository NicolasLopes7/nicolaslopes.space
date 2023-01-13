import * as React from "react";
import { Text } from "../text";

type LogoElement = React.ElementRef<"svg">;
type RootProps = React.ComponentPropsWithoutRef<"svg">;

export const Logo = React.forwardRef<LogoElement, Readonly<RootProps>>(
  ({ ...props }, forwardedRef) => (
    <Text
      className="text-white/80 "
      size="4"
    >
      nicolaslopes.space
    </Text>
  )
);

Logo.displayName = "Logo";
