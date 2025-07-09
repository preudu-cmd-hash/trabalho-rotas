import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <>
      <div className={styles.container}>
        <footer className={styles.footer}>
          <p className={styles.content}>
            Todos os direitos reservados a{" "}
            <a
              className={styles.link}
              href="https://github.com/preudu-cmd-hash"
              target="_blank"
            >
              Pedro Henrique
            </a>{" "}
            e{" "}
            <a
              className={styles.link}
              href="https://github.com/Opalinalua"
              target="_blank"
            >
              Luanda Rabello
            </a>
          </p>
        </footer>
      </div>
    </>
  );
};
