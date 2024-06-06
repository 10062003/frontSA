import { useNavigate } from "react-router-dom";
import CardGeneral from "../components/ui/CardGeneral";

const UpaInicio = () => {
  const navigate = useNavigate();
  const ButtonRegistroUpa = () => {
    navigate("/RegistroUpa");
  };

  const ButtonListarUpa = () => {
    navigate("/TablaUpa");
  };

  return (
    <div>
      <CardGeneral
        title="Upas"
        description={
          "Bienvido a la sección de Upas (Unidades productivas agropecuarías), aquí podrás registrar y buscar Upas."
        }
        toFrist={"/Inicio"}
        onClickOne={ButtonRegistroUpa}
        onClickTwo={ButtonListarUpa}
      />
    </div>
  );
};
export default UpaInicio;
