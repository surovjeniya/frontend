import { useGetProductsByCategoryQuery } from "@/store/api/fakestore";
import { useAppSelector } from "hooks/useAppSelector";
import { Product } from "./product/Product";
import styles from "./Products.module.scss";
import { ProductsProps } from "./Products.props";

export const Products = () => {
  const { selectedCategory } = useAppSelector((store) => store.switchCategory);

  const {
    data: products,
    error,
    isLoading,
  } = useGetProductsByCategoryQuery(selectedCategory);

  return (
    <ul className={styles.products}>
      {isLoading ? "Загрузка" : ""}
      {!isLoading && error ? "Ошибка" : ""}
      {products?.length
        ? products.map((product) => (
            <li key={product.id}>
              <Product product={product} />
            </li>
          ))
        : ""}
    </ul>
  );
};
