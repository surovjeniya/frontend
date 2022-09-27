import styles from "./Catalog.module.scss";
import { CatalogProps } from "./Catalog.props";
import cn from "classnames";
import { useState } from "react";
import { Categories } from "./categories/Categories";

export const Catalog = ({
  active,
  setActive,
  className,
  ...props
}: CatalogProps) => {
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "Бытовая техника",
    },
    {
      id: 1,
      name: "Бытовая техника",
    },
    {
      id: 1,
      name: "Бытовая техника",
    },
    {
      id: 1,
      name: "Бытовая техника",
    },
    {
      id: 1,
      name: "Бытовая техника",
    },
    {
      id: 1,
      name: "Бытовая техника",
    },
    {
      id: 1,
      name: "Бытовая техника",
    },
    {
      id: 1,
      name: "Бытовая техника",
    },
    {
      id: 1,
      name: "Бытовая техника",
    },
    {
      id: 1,
      name: "Бытовая техника",
    },
    {
      id: 1,
      name: "Бытовая техника",
    },
    {
      id: 1,
      name: "Бытовая техника",
    },
    {
      id: 1,
      name: "Бытовая техника",
    },
    {
      id: 1,
      name: "Бытовая техника",
    },
    {
      id: 1,
      name: "Бытовая техника",
    },
    {
      id: 1,
      name: "Бытовая техника",
    },
    {
      id: 1,
      name: "Бытовая техника",
    },
    {
      id: 1,
      name: "Бытовая техника",
    },
    {
      id: 1,
      name: "Бытовая техника",
    },
    {
      id: 1,
      name: "Бытовая техника",
    },
    {
      id: 1,
      name: "Бытовая техника",
    },
    {
      id: 1,
      name: "Бытовая техника",
    },
  ]);

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
        <div>Products</div>
      </div>
    </div>
  );
};
