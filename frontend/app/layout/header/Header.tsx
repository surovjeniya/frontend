import { Button, Input } from "@/components/index";
import Link from "next/link";
import React, { useState } from "react";
import { Catalog } from "./catalog/Catalog";
import styles from "./Header.module.scss";

import { Search } from "./search/Search";
import { HeaderTop } from "./header-top/HeaderTop";

export const Header = () => {
  const [showCatalog, setShowCatalog] = useState<boolean>(false);

  return (
    <header className={styles.header}>
      <HeaderTop />
      <div className={styles.headerBottom}>
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
          <Catalog active={showCatalog} setActive={setShowCatalog} />
        </div>
        <div className={styles.search}>
          <Search />
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
      </div>
    </header>
  );
};
