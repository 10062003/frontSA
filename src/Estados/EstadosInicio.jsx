import { useNavigate } from "react-router-dom";
import CardGeneral from "../components/ui/CardGeneral";

const EstadoInicio = () => {
  const navigate = useNavigate();
  const ButtonRegistroEstados = () => {
    navigate("/RegistroEstado");
  };

  const ButtonListarEstados = () => {
    navigate("/ListarEstados");
  };

  return (
    <div>
      <div>
        <CardGeneral
          title="Estados"
          description={
            "Aquí podrás registrar un nuevo estado y listar los ya existentes."
          }
          toFrist={"/Inicio"}
          onClickOne={ButtonRegistroEstados}
          onClickTwo={ButtonListarEstados}
        />
      </div>
    </div>
  );
};
export default EstadoInicio;
