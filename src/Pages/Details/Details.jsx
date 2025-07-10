import { useNavigate, useParams } from "react-router";
import styles from "./Details.module.css";

export const Details = () => {
  const navigate = useNavigate();
  const { name } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <h4 className={styles.titulo}>Detalhes do produto</h4>
      <p className={styles.id}>Id do produto: {name}</p>
      <form className={styles.formD} onSubmit={handleSubmit}>
        <button className={styles.voltar} type="submit">
          Voltar
        </button>
      </form>
    </div>
  );
};
