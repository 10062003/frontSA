import { useNavigate } from "react-router-dom";
import CardGeneral from "../components/ui/CardGeneral";

const EstadosInicio = () => {
  const navigate = useNavigate();
  const ButtonRegistroEstado= () => {
    navigate("/RegistroEstados");
  };

  const ButtonListarEstados = () => {
    navigate("/TablaEstados");
  };

  return (
    <div>
      <CardGeneral
        title="Estados"
        description={
          "Bienvido a la sección de Estados de tickets, aquí podrás registrar y buscar los estados disponibles."
        }
        toFrist={"/Inicio"}
        onClickOne={ButtonRegistroEstado}
        onClickTwo={ButtonListarEstados}
      />
    </div>
  );
};
export default EstadosInicio;
