import { Button, Input } from "@/components/index";
import { useState } from "react";
import { Catalog } from "./catalog/Catalog";
import styles from "./Header.module.scss";

export const Header = () => {
  const [showCatalog, setShowCatalog] = useState<boolean>(true);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Button>Логотип</Button>
      </div>
      <div className={styles.catalog}>
        <div className={styles.dropdown}>
          <Button
            className={styles.catalogBtn}
            onClick={() => setShowCatalog(!showCatalog)}
          >
            Каталог
          </Button>
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
        <Button>Корзина</Button>
      </div>
      <div className={styles.favorites}>
        <Button>Избранное</Button>
      </div>
      <div className={styles.qr}>
        <Button>QR</Button>
      </div>
      <div className={styles.personal}>
        <Button>Личный кабинет</Button>
      </div>
    </header>
  );
};
