import { useNavigate } from "react-router-dom";
import CardGeneral from "../components/ui/CardGeneral";

const DocumentosInicio = () => {
  const navigate = useNavigate();
  const ButtonRegistroDocumentos = () => {
    navigate("/RegistroDocumentos");
  };

  const ButtonListarDocumentos = () => {
    navigate("/TablaDocumentos");
  };

  return (
    <div>
      <CardGeneral
        title="Tipos de documento"
        description={
          "Bienvido a la documentos, aquí podrás registrar y buscar los tipos de documento disponibles."
        }
        toFrist={"/Inicio"}
        onClickOne={ButtonRegistroDocumentos}
        onClickTwo={ButtonListarDocumentos}
      />
    </div>
  );
};
export default DocumentosInicio;
