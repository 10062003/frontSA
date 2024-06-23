import React from "react";
import { useNavigate } from "react-router-dom";
import CardGeneral from "../components/ui/CardGeneral";

const TicketsInicio = () => {
  const navigate = useNavigate();

  const ButtonRegistroTickets = () => {
    navigate("/RegistroTickets");
  };

  const ButtonListarTickets = () => {
    navigate("/");
  };

  const ButtonCrearTicket = () => {
    navigate("/RegistroNuevoTicket");
  };

  const ButtonConsultarTickets = () => {
    navigate("/");
  };

  const ButtonRegistroEstadoTickets = () => {
    navigate("/RegistroEstadosTickets");
  };

  const ButtonListarEstadoTickets = () => {
    navigate("/TablaEstadoTickets");
  };

  return (
    <div>
      <div>
        <CardGeneral
          title="Tipos de tickets"
          description={
            "Aquí podrás registrar un nuevo tipo de ticket y listar los ya existentes."
          }
          toFrist={"/Inicio"}
          onClickOne={ButtonRegistroTickets}
          onClickTwo={ButtonListarTickets}
        />
      </div>
      <div>
        <CardGeneral
          title="Estados de tickets"
          description={
            "Aquí podrás registrar un nuevo estado de ticket y listar los ya existentes."
          }
          toFrist={"/Inicio"}
          onClickOne={ButtonRegistroEstadoTickets}
          onClickTwo={ButtonListarEstadoTickets}
        />
      </div>
      <div>
        <CardGeneral
          title="Tickets"
          description={
            "Aquí podrás generar un nuevo ticket y dar seguimiento a tu solicitud."
          }
          toFrist={"/Inicio"}
          onClickOne={ButtonCrearTicket}
          onClickTwo={ButtonConsultarTickets}
        />
      </div>
    </div>
  );
};

export default TicketsInicio;
