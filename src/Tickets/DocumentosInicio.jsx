import { useNavigate } from "react-router-dom";
import CardGeneral from "../components/ui/CardGeneral";

const TicketsInicio = () => {
  const navigate = useNavigate();
  const ButtonRegistroTickets = () => {
    navigate("/RegistroTickets");
  };

  const ButtonListarTickets = () => {
    navigate("/TablaTickets");
  };

  return (
    <div>
      <CardGeneral
        title="Tickets"
        description={
          "Aquí podrás registrar un nuevo tipo de ticket y listar los ya existentes."
        }
        toFrist={"/Inicio"}
        onClickOne={ButtonRegistroTickets}
        onClickTwo={ButtonListarTickets}
      />
    </div>
  );
};
export default TicketsInicio;
