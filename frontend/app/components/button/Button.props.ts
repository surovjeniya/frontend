import React, { ReactNode } from "react";

export interface ButtonProps extends React.ComponentPropsWithRef<"button"> {
  children: ReactNode;
  onClick?: (e: React.MouseEvent) => void;
}
