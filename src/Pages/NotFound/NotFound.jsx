import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import styles from "./NotFound.module.css";

export const NotFound = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>Clique em "Home" no cabeçalho para acessar o site</h1>
      </div>
    </>
  );
};
