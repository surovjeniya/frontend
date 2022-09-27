import { CategoryProps } from "./Category.props";
import styles from "./Category.module.scss";
import cn from "classnames";
import { useGetProductsByCategoryQuery } from "@/store/api/fakestore";
import React, { useState } from "react";
import { useAppDispatch } from "hooks/useAppDispatch";
import { switchCategory } from "@/store/slice/swith-category.slice";

export const Category = ({ category }: CategoryProps) => {
  const dispatch = useAppDispatch();

  return (
    <div
      data-category={category}
      className={cn(styles.category)}
      onClick={(e: React.MouseEvent<HTMLDivElement>) =>
        dispatch(switchCategory(e.target.getAttribute("data-category")))
      }
    >
      {category}
    </div>
  );
};
