import { CategoryProps } from "./Category.props";
import styles from "./Category.module.scss";
import cn from "classnames";

export const Category = ({ category }: CategoryProps) => {
  return <div className={cn(styles.category)}>{category.name}</div>;
};
