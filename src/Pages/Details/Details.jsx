import { useParams } from "react-router";

export const Details = () => {
  const { name } = useParams();
  return (
    <div>
      <h4>Detalhes do produto</h4>
      <p>Id do produto: {name}</p>
    </div>
  );
};
