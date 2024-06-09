import { useNavigate } from "react-router-dom";
import CardGeneral from "../components/ui/CardGeneral";

const RolesInicio = () => {
  const navigate = useNavigate();
  const ButtonRegistroRol = () => {
    navigate("/RegistroRoles");
  };

  const ButtonListarRoles = () => {
    navigate("/TablaRoles");
  };

  return (
    <div>
      <CardGeneral
        title="Roles"
        description={
          "Bienvido a la sección de Roles, aquí podrás registrar y buscar los roles disponibles."
        }
        toFrist={"/Inicio"}
        onClickOne={ButtonRegistroRol}
        onClickTwo={ButtonListarRoles}
      />
    </div>
  );
};
export default RolesInicio;
