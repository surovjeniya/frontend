import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import styles from "./Layout.module.scss";

interface LayoutProps {
  children: JSX.Element;
}
export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Header />
        <main className={styles.content}>{children}</main>
        <Footer />
      </div>
    </div>
  );
};
