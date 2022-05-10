import React, { ComponentType, FC, HTMLAttributes, ReactNode } from "react";

interface Props {
  children: ReactNode | ReactNode[];
  el?: ComponentType<HTMLAttributes<HTMLElement>>;
}

const Container: FC<Props> = ({ children, el: Component = "div" }) => {
  return (
    // <div style={{ maxWidth: "1920px" }} className="px-6 mx-auto">
    <Component className="px-6 mx-auto max-w-8xl">{children}</Component>
  );
};

export default Container;
