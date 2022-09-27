import { Button, Input } from "@/components/index";
import Link from "next/link";
import { useState } from "react";
import { Catalog } from "./catalog/Catalog";
import styles from "./Header.module.scss";

export const Header = () => {
  const [showCatalog, setShowCatalog] = useState<boolean>(false);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <Button>Логотип</Button>
        </Link>
      </div>
      <div className={styles.catalog}>
        <Button
          className={styles.catalogBtn}
          onClick={() => setShowCatalog(!showCatalog)}
        >
          Каталог
        </Button>
        <div className={styles.dropdown}>
          <Catalog
            className={styles.catalogContent}
            active={showCatalog}
            setActive={setShowCatalog}
          />
        </div>
      </div>
      <div className={styles.search}>
        <Input />
        <Button>Поиск</Button>
      </div>
      <div className={styles.cart}>
        <Link href="/cart">
          <Button>Корзина</Button>
        </Link>
      </div>
      <div className={styles.favorites}>
        <Link href="/favorites">
          <Button>Избранное</Button>
        </Link>
      </div>
      <div className={styles.qr}>
        <Button>QR</Button>
      </div>
      <div className={styles.personal}>
        <Link href="/personal">
          <Button>Личный кабинет</Button>
        </Link>
      </div>
    </header>
  );
};
