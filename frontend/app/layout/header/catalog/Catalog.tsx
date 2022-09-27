import styles from "./Catalog.module.scss";
import { CatalogProps } from "./Catalog.props";
import cn from "classnames";
import { useState } from "react";
import { Categories } from "./categories/Categories";
import { useGetAllCategoriesQuery } from "@/store/api/fakestore";
import { Products } from "./products/Products";

export const Catalog = ({
  active,
  setActive,
  className,
  ...props
}: CatalogProps) => {
  const { data: categories, error, isLoading } = useGetAllCategoriesQuery("");

  return (
    <div
      className={cn(className, styles.catalog, {
        [styles.active]: active,
      })}
      onClick={() => {
        setActive(false);
      }}
    >
      <div
        className={styles.catalogContent}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.categories}>
          <Categories categories={categories} />
        </div>
        <div className={styles.products}>
          <Products />
        </div>
      </div>
    </div>
  );
};
