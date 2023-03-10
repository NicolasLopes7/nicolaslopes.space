import React from "react";
import Image from "next/image";
import classnames from "classnames";
import { Anchor, Text } from "../design-system";

type FooterElement = React.ElementRef<"footer">;
type RootProps = React.ComponentPropsWithoutRef<"footer">;

export const Footer = React.forwardRef<FooterElement, Readonly<RootProps>>(
  ({ className, ...props }, forwardedRef) => (
    <footer
      ref={forwardedRef}
      className={classnames(
        "flex h-[80px] items-center justify-center text-center pb-3",
        className
      )}
      {...props}
    >
      <Text className="inline-flex items-center gap-2">
        <Anchor
          target="_blank"
          href="https://twitter.com/nicolaslopess__"
          appearance="white"
          className="inline-flex items-center gap-2"
        >
          <Image
            className="inline-block rounded-full border border-slate-7"
            src="/static/nicolas.jpeg"
            alt={""}
            width="30"
            height="30"
          />
          Nicolas
        </Anchor>{" "}
      </Text>
    </footer>
  )
);

Footer.displayName = "Footer";
