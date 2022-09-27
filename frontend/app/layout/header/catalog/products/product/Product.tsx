import { ProductProps } from "./Product.props";
import Image from "next/image";
import styles from "./Product.module.scss";
import Link from "next/link";

export const Product = ({ product }: ProductProps) => {
  return (
    <div>
      <h3>{product?.title}</h3>
      <div className={styles.image}>
        <img src={product?.image} />
      </div>
      <p>{product?.description}</p>
      <h3>{product?.price}</h3>
    </div>
  );
};
