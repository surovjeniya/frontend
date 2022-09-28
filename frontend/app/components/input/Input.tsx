import { InputProps } from "./Input.props";
import cn from "classnames";
import styles from "./Input.module.scss";

export const Input = ({
  onChange,
  className,
  id,
  error,
  ...props
}: InputProps) => {
  return (
    <input
      id={id}
      {...props}
      onChange={onChange}
      className={cn(className, styles.input, {
        [styles.error]: error,
      })}
    />
  );
};
