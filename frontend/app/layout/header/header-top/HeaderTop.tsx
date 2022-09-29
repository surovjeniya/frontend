import Link from "next/link";
import styles from "./HeaderTop.module.scss";
import { headerTopRoutes } from "./routes/header-top.routes";

export const HeaderTop = () => {
  return (
    <div className={styles.headerTop}>
      <nav>
        <ul className={styles.topNavigation}>
          {headerTopRoutes.map((item) => (
            <li key={item.path} className={styles.navItem}>
              <Link href={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
