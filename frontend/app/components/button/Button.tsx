import { ButtonProps } from "./Button.props";
import cn from "classnames";
import styles from "./Button.module.scss";

export const Button = ({
  onClick,
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(className, styles.button)}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
