import { Check } from "@components/icons";
import React, { FC } from "react";
import s from "./Swatch.module.css";
import cn from "classnames";
import { isDark } from "@lib/color";

interface Props {
  size?: "sm" | "md" | "lg";
  color?: string;
  label?: string;
  variant?: "size" | "color" | string;
  active?: boolean;
  onClick: () => void;
}

const Swatch: FC<Props> = ({
  size = "md",
  color,
  label,
  variant,
  active,
  ...rest
}) => {
  label = label?.toLocaleLowerCase();
  variant = variant?.toLocaleLowerCase();

  const rootClass = cn(s.root, {
    [s.active]: active,
    [s.color]: color,
    [s.size]: variant === "size",
    [s.dark]: color && isDark(color),
    [s.sm]: size === "sm",
  });
  return (
    <button
      style={color ? { backgroundColor: color } : {}}
      className={rootClass}
      {...rest}
    >
      {variant === "color" && active && (
        <span>
          <Check />
        </span>
      )}

      {variant === "size" ? label : null}
    </button>
    // <>
    //   {color && <> Color: {color}</>}
    //   {label && <> Label: {label}</>}
    // </>
  );
};

export default Swatch;
