import { useState } from "react";
import { useNavigate } from "react-router";

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
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nome do produto</label>
          <input type="text" name="name" onChange={handleChange} />
          <br />
          <label htmlFor="message">Id do produto</label>
          <input type="text" name="message" onChange={handleChange} />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </>
  );
};
