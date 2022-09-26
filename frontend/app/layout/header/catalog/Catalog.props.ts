import React, { Dispatch, SetStateAction } from "react";

export interface CatalogProps extends React.ComponentPropsWithRef<"div"> {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}
