import { useState } from "react";
import { useNavigate } from "react-router";
import styles from "./Home.module.css";

export const Home = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    name: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    navigate(`/details/${formValues.message}`, { state: formValues });
  };
  return (
    <>
      <div className={styles.container}>
        <form className={styles.formH} onSubmit={handleSubmit}>
          <div className={styles.inputsRow}>
            <div>
              <label htmlFor="name">Nome do produto: </label>
              <input
                className={styles.input}
                type="text"
                name="name"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="message">Id do produto: </label>
              <input
                className={styles.input}
                type="text"
                name="message"
                onChange={handleChange}
              />
            </div>
          </div>
          <button className={styles.enviar} type="submit">
            Enviar
          </button>
        </form>
      </div>
    </>
  );
};
