import {
  FC,
  ReactNode,
  ButtonHTMLAttributes,
  ComponentType,
  HTMLAttributes,
} from "react";
import s from "./Button.module.css";
import cn from "classnames";
import LoadingDots from "../LoadingDots";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode | ReactNode[];
  isLoading?: boolean;
  Component?: string | ComponentType<HTMLAttributes<HTMLElement>>;
  href?: string;
}

const Button: FC<Props> = ({
  children,
  className,
  isLoading = false,
  Component = "button",
  ...rest
}) => {
  const rootClass = cn(s.root, {
    [s.loading]: isLoading,
  });
  return (
    <Component className={rootClass} type="button" {...rest}>
      {children}
      {isLoading && (
        <i className="pl-2 m-0 flex">
          <LoadingDots />
        </i>
      )}
    </Component>
  );
};

export default Button;
