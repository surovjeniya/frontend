import styles from "./Catalog.module.scss";
import { CatalogProps } from "./Catalog.props";
import cn from "classnames";
import { useState } from "react";

export const Catalog = ({
  active,
  setActive,
  className,
  ...props
}: CatalogProps) => {
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
        <div className={styles.categories}>Categories</div>
        <div>Products</div>
      </div>
    </div>
  );
};
