import React from "react";
import { useNavigate } from "react-router-dom";
import CardGeneral from "../components/ui/CardGeneral";

const TicketsInicio = () => {
  const navigate = useNavigate();

  const ButtonRegistroTickets = () => {
    navigate("/RegistroTipoTickets");
  };

  const ButtonListarTickets = () => {
    navigate("/TablaTipoTicket");
  };

  const ButtonCrearTicket = () => {
    navigate("/RegistroNuevoTicket");
  };

  const ButtonConsultarTickets = () => {
    navigate("/TablaTickets");
  };

  const ButtonRegistroEstadoTickets = () => {
    navigate("/RegistroEstadosTickets");
  };

  const ButtonListarEstadoTickets = () => {
    navigate("/TablaEstadoTickets");
  };

  return (
    <div className="flex flex-wrap h-screen p-4 flex-col gap-4">
      <div className="flex flex-col">
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
      <div className="flex flex-col">
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
      <div className="flex flex-col">
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
    </div>
  );
};

export default TicketsInicio;
