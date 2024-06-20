import { useNavigate } from "react-router-dom";
import CardGeneral from "../components/ui/CardGeneral";

const ProfesionInicio = () => {
  const navigate = useNavigate();
  const ButtonRegistroProfesion = () => {
    navigate("/RegistroProfesion");
  };

  const ButtonListarProfesion = () => {
    navigate("/TablaProfesiones");
  };

  return (
    <div>
      <CardGeneral
        title="Profesiones"
        description={
          "Bienvido a la sección de Profesiones, aquí podrás registrar y buscar las profesiones disponibles."
        }
        toFrist={"/Inicio"}
        onClickOne={ButtonRegistroProfesion}
        onClickTwo={ButtonListarProfesion}
      />
    </div>
  );
};
export default ProfesionInicio;
