import { useNavigate } from "react-router-dom";
import CardGeneral from "../components/ui/CardGeneral";

const UpaInicio = () => {
  const navigate = useNavigate();
  const handleButton = () => {
    navigate("/");
  };

  return (
    <div>
      <CardGeneral
        title="Upas"
        description={
          "Bienvido a la sección de Upas (Unidad productiva agropecuaría), aquí podrás registrar y buscar Upas."
        }
        toFrist={"/Inicio"}
        onClick={handleButton}
      />
    </div>
  );
};
export default UpaInicio;
