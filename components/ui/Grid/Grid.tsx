import React, { FC, ReactNode } from "react";
import s from "./Grid.module.css";
import cn from "classnames";
interface Props {
  children: ReactNode[];
  layout?: "A" | "B";
}
const Grid: FC<Props> = ({ children, layout }) => {
  const rootClassNames = cn(s.root, {
    [s.layoutA]: layout === "A",
    [s.layoutB]: layout === "B",
  });
  return <div className={rootClassNames}>{children}</div>;
};

export default Grid;
