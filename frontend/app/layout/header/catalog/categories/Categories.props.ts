import React from "react";

export interface CategoriesProps extends React.ComponentPropsWithRef<"div"> {
  categories?: string[];
}
