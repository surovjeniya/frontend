import { InputProps } from "./Input.props";

export const Input = ({ ...props }: InputProps) => {
  return <input type="text" {...props} />;
};
