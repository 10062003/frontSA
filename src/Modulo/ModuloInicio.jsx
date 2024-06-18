import { useNavigate } from "react-router-dom";
import CardGeneral from "../components/ui/CardGeneral";

const ModuloInicio = () => {
  const navigate = useNavigate();
  const ButtonRegistroModulo = () => {
    navigate("/RegistroModulo");
  };

  const ButtonListarModulo = () => {
    navigate("/TablaModulo");
  };

  return (
    <div>
      <CardGeneral
        title="Modulos"
        description={
          "Bienvido a la sección de Módulos, aquí podrás registrar y buscar los módulos disponibles."
        }
        toFrist={"/Inicio"}
        onClickOne={ButtonRegistroModulo}
        onClickTwo={ButtonListarModulo}
      />
    </div>
  );
};
export default ModuloInicio;
