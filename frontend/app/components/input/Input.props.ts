import React from "react";

export interface InputProps extends React.ComponentPropsWithRef<"input"> {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
}
