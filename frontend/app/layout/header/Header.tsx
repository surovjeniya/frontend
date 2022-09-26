import { Button, Input } from "@/components/index";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Button>Логотип</Button>
      </div>
      <div className={styles.catalog}>
        <Button>Каталог</Button>
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
