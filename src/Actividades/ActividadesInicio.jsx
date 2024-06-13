import { useNavigate } from "react-router-dom";
import CardGeneral from "../components/ui/CardGeneral";

const ActividadesInicio = () => {
  const navigate = useNavigate();
  const ButtonRegistroActividades = () => {
    navigate("/RegistroActividades");
  };

  const ButtonListarActividades = () => {
    navigate("/TablaUpa");
  };

  const ButtonRegistroUsuarioAct = () => {
    navigate("/RegistroUsuarioActividad");
  };

  const ButtonListarUsuarioAct = () => {
    navigate("/TablaUpa");
  };

  return (
    <div>
      <CardGeneral
        title="Actividades"
        description={
          "Bienvido a la sección de Actividades, aquí podrás registrar y buscar actividades."
        }
        toFrist={"/Inicio"}
        onClickOne={ButtonRegistroActividades}
        onClickTwo={ButtonListarActividades}
      />
      <CardGeneral
        title="Asignar Actividades"
        description={
          "Bienvido a la sección de asignar actividades, aquí podrás indicar a que usuario quieres que se registre una actividad."
        }
        toFrist={"/Inicio"}
        descButtonOne={"Asignar Actividad"}
        descButtonTwo={"Listar Actividades Asignadas"}
        onClickOne={ButtonRegistroUsuarioAct}
        onClickTwo={ButtonListarUsuarioAct}
      />
    </div>
  );
};
export default ActividadesInicio;
