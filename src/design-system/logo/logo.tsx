import * as React from "react";
import { Text } from "../text";

type LogoElement = React.ElementRef<"svg">;
type RootProps = React.ComponentPropsWithoutRef<"svg">;

export const Logo = React.forwardRef<LogoElement, Readonly<RootProps>>(
  ({ ...props }, forwardedRef) => (
    <Text
      className="before:content-['My 🪟 to the web'] relative mb-8 !text-white/80 before:absolute before:left-0 before:top-0 before:w-full before:animate-[shine_2s_ease-in-out] before:bg-shine before:bg-[length:200%] before:bg-clip-text before:text-transparent "
      size="4"
    >
      nicolaslopes.space
    </Text>
  )
);

Logo.displayName = "Logo";
