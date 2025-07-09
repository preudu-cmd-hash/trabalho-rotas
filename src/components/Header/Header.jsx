import styles from "./Header.module.css";
import { Navbar } from "../Navbar/Navbar";

export const Header = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.content}>Trabalho utilizando Router</h1>
      <Navbar />
    </div>
  );
};
