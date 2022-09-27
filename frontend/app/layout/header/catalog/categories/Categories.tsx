import { CategoriesProps } from "./Categories.props";
import styles from "./Categories.module.scss";
import cn from "classnames";
import { Category } from "../category/Category";

export const Categories = ({ categories }: CategoriesProps) => {
  return (
    <div className={styles.categories}>
      {categories?.length ? (
        <ul className={styles.categoriesList}>
          {categories.map((item, index) => (
            <li key={index}>
              <Category category={item} />
            </li>
          ))}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};
