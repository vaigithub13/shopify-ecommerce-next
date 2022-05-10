import React, { ReactNode, FC } from "react";
import Ticker from "react-ticker";
import s from "./Marquee.module.css";

import cn from "classnames";

interface Props {
  children: ReactNode | ReactNode[];
  variant?: "primary" | "secondary";
}

const Marquee: FC<Props> = ({ children, variant = "primary" }) => {
  const clasNames = cn(s.root, {
    [s.secondary]: variant === "secondary",
  });
  return (
    <div className={clasNames}>
      <Ticker offset={10}>
        {() => <div className={s.container}>{children}</div>}
      </Ticker>
    </div>
  );
};

export default Marquee;
